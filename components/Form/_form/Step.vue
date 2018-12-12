<template>
        <div>



            <!-- //////////////////////////////////////////////////////////////
                Step
            /////////////////////////////////////////////////////////////// -->
            <div class="step" :class="`step--${blok.type}`">


                <!-- Title -->
                <h3 class="title" :class="`title--${blok.type}`">{{ blok.title }}</h3>


                <!-- Text -->
                <div v-if="blok.type === 'text'" class="text">


                    <span
                        class="input"
                        contenteditable="true"
                        @keyup="updateInput"
                        @keydown="onEnter"
                        @click="initilizeInput">{{ blok.initial || '' }}</span>

                </div>



                <!-- Checkbox -->
                <div
                    class="checkbox"
                    v-if="blok.type === 'checkbox'"
                    v-for="(option, index) in checkboxes"
                    :key="index">

                    <input
                        :id="`checkcheck-${index}`"
                        class="checkbox"
                        type="checkbox"
                        :value="option"
                        @change="check">

                    <label class="" :for="`checkcheck-${index}`">{{ option }}</label>

                </div>




                <div
                    class="textarea"
                    v-if="blok.type === 'textarea'">
                    <textarea>

                    </textarea>
                </div>


            </div>

            <p v-if="error" class="error">{{ blok.error }}</p>




            <!-- //////////////////////////////////////////////////////////////
                Buttons
            /////////////////////////////////////////////////////////////// -->
            <form-button :validation="blok.validation" :action="id" :form="form"/>

        </div>
</template>



<script>

import FormButton from './FormButton'

export default {
    name: 'Step',
    props: ['blok', 'id', 'form'],
    components: { 'form-button': FormButton },

    data() {
        return {
            value: '',
            error: false
        }
    },



    computed: {
        checkboxes() {
            return this.blok.initial.split(',').map(checkbox => checkbox.trim())
        }
    },



    methods: {
        initilizeInput(e) {
            if (this.value !== e.target.innerHTML) e.target.innerHTML = this.value
        },



        updateInput(e) {
            const value = e.target.innerHTML.replace(/<\/?[^>]+(>|$)/g, '').trim()

            this.value = value
            this.error = this.error && this.value.length > 0 ? true : false

        },


        onEnter(e) {
            if (e.keyCode === 13) {
                e.preventDefault()
                this.submitStep()
            }
        },



        check(e) {
            if (!Array.isArray(this.value)) this.value = new Array()
            const value = e.target.value.toLowerCase()

            if( this.value.includes(value) ) {
                this.value = this.value.filter( val => val !== value )
            } else {
                this.value.push(value);
            }

            this.value.length > 0 && (this.error = false)

        },



        submitStep() {

            const isValid = this._validate()
            if (this.blok.validation === undefined) console.log('submiting without blok.validation')
            if (isValid) {
                this.error = false
                this.$store.commit('saveStep', { value: this.value, name: this.blok.name, form: this.form })
                this.$store.commit('nextStep', this.form)
            } else {
                this.error = true
            }
        },



        _validate() {
            switch(this.blok.validation) {

                case 'email' :
                    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return typeof this.value === 'string' && regEmail.test(this.value)


                case 'min':
                    return this.value.length > 3


                case 'checkbox' :
                    return this.value.length === 0 ? false : true

            }
        },

    },




    mounted() {
        if (document.querySelector('.input')) document.querySelector('.input').focus()
    },




}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


*[contenteditable]
    outline none

.error
    text-align center
    margin-top 2em
    color red

.step--checkbox,
.title--checkbox
    display block !important

.title--checkbox
    margin-bottom 1.4em

.title
    font-weight 300
    color alpha($black, .6)

.step
    display flex
    text-align center
    .title,
    .input
        font-size calc(1rem + 2.4 * (100vw / 200))
        // display inline-block

    & > div
        display block
        display inline-block
        flex-grow 1
        flex-shrink 0



.input
    position relative
    width auto
    min-width 2em
    // border-bottom solid 1px $black
    white-space pre-wrap
    word-break break-all
    font-weight 600
    margin 0 0 0 .36em
    text-align left
    height 1em
    display block
    user-select auto

    &::after
        content ""
        position absolute
        width 100%
        height 1px
        bottom -.2em
        left 0
        background-color $black

// .checkboxes
//     padding 3em 0 0 0

.checkbox
    margin .2em
    transition border 250ms ease-in-out
    font-size calc(1rem + (100vw / 400))
    input[type="checkbox"]
        display none
        & ~ label
            padding .8em 1.4em
            box-sizing border-box
            border solid 1px $grey--light
        &:checked ~ label
            border-color $black





</style>


