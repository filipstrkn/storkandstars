<template>
    <section id="GotProject" v-editable="blok">

        <!--

            section with message
            when clicked => show form
            1 first message
            2 email
            3 Send

            close and show message

         -->



        <!-- Text -->
        <div class="form--trigger">
            <h3 class="_clickable _link--underlined" @click="showForm">Create project</h3>
            <!-- <form-message :message="message"></form-message> -->
        </div>




        <div class="form__body" v-if="visible">


            <!-- Form -->
            <form-block
                v-if="!$store.getters.isMessageSent && !$store.state.contactForm.status"
                :placeholder="placeholder"
                :identificator="blok._uid">
            </form-block>

        </div>

    </section>
</template>



<script>

import FormBlock from './_contact_form/FormBlock'
import FormMessage from './_contact_form/FormMessage'
// import setWidthOfElement from '~/mixins/setWidthOfElement'



export default {
    name: 'ContactForm',
    props: ['blok'],
    // mixins: [setWidthOfElement],
    components: {
        'form-block': FormBlock,
        'form-message': FormMessage
    },
    data() {
        return {
            placeholder: {
                email: this.blok.email,
                from: this.blok.email_from,
                message: this.blok.message,
                submit: this.blok.submit
            },
            message: {
                default: this.blok.title,
                processing: this.blok.message_processing,
                success: this.blok.message_success,
                fail: this.blok.message_fail
            }
        }
        },
    computed: {
        visible() {
            return this.$store.state.contactForm.visible
        },
        titleVisibility() {
            const { visible } = this.$store.state.contactForm
            if (!visible) return { 'visibility': 'visible' }
            else return { 'visibility': 'hidden' }
        }
    },
    methods: {
        showForm() {
            this.$store.commit('setFormVisibility', true)
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'


#GotProject
    display flex
    align-items center
    position relative
    padding 0 4em 0 12em


.form--trigger
    position relative

    &::after
        content ""
        position absolute
        display block
        width 60vh
        height @width
        // background-color $grey--lighter
        background-color #f5f5f5
        left 50%
        top 50%
        transform translateY(-50%)
        z-index 0



.form__body
    position fixed
    display flex
    top 0
    left 0
    width 100%
    height 100%
    // background-color $grey--lighter
    background-color #f9eded
    z-index 10


</style>


