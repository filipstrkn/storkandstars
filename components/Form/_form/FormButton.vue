<template>

    <div class="buttons">

        <!-- //////////////////////////////////////////////////////////////////
            Buttons
        /////////////////////////////////////////////////////////////////// -->
        <!-- Back -->
        <div
            class="back"
            v-if="$store.getters.currentStep > 0"
            @click.prevent="$store.commit('previousStep')">
            <span></span
        ></div>

        <!-- Forward -->
        <div
            class="forward"
            v-if="nextStepExists"
            @click.prevent="$emit('submitStep', validation)">
            <span></span>
        </div>

        <!-- Submit -->
        <button
            class="submit"
            v-if="!nextStepExists"
            @click.prevent="$store.dispatch('submitForm', action)">
            {{ 'ahooooj' }}<span></span>
        </button>



    </div>


</template>



<script>
export default {
    name: 'FormButton',
    props: ['validation', 'action', 'form'],


    computed: {

        nextStepExists() {

            const currentStep = this.$store.state.forms[this.form].current.index
            const totalSteps = this.$store.state.forms[this.form].total

            return currentStep !== totalSteps
        },


    },


    methods: {

        // async submitStep() {


        //     const { validation } = this

        //     const isValid = await this.$store.dispatch('_validate', {
        //         validation,
        //         value: this.$store.state.forms[this.form].current.value
        //     })


        //     if (!validation) console.log('submiting without validation')
        //     if (isValid) {
        //         this.$store.state.forms[this.form].current.error = false
        //         // console.log('Step is valid!', this.value, 'whas been sent as', validation)
        //         this.$store.commit('nextStep')

        //     } else {
        //         this.$store.state.forms[this.form].current.error = true
        //     }
        // },

    }
}
</script>



<style lang="stylus" scoped>


.buttons
    position absolute
    bottom 5%
    left 50%
    transform translateX(-50%)
    display flex

    & > *
        margin-right .6em
        padding 2em 1.4em
    & > :last-child
        margin 0



.forward,
.back
    position relative
    display inline-block
    text-align center
    background-color #f7f7f7

    span
        pointer-events none
        position relative
        display block
        height 2px
        width 20px
        background-color #000
        &::after,
        &::before
            content ""
            position absolute
            top calc(50% - 1px)
            height 2px
            background-color #000
            width 7px

        &::before
            transform rotate(135deg) translate(100%, -50%)
            transform-origin right
            right 2px

        &::after
            right -5px
            transform rotate(45deg) translate(-100%, -50%)
            transform-origin left


.forward
    padding-left 4em
    padding-right 4em

.back
    span
        transform rotate(180deg)


</style>
