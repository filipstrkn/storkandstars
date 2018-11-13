<template>
    <transition name="slide">
        <form id="FormBlock" @submit="sendMessage">

            <!-- Email -->
            <div :class="{'is-full': isEmailFull}">
                <input v-model="email" type="text" :placeholder="placeholder.email ||  `Your email`">
            </div>

            <!-- Message -->
            <textarea v-model="message" :placeholder="placeholder.message || `Your message`"></textarea>


            <!-- Submit button -->
            <transition name="fade">
                <button v-if="isEmail" type="submit">{{ placeholder.submit }}</button>
            </transition>

        </form>
    </transition>
</template>


<script>
export default {



    name: 'FormBlock',
    props: ['placeholder'],


    computed: {
        /*
         |---------------------------------------------------------------------
         | Validating email
         |---------------------------------------------------------------------
         |
         | Email has two basic validations
         | 1. First is retrieved via RegEx
         | 2. Second is simple control whether input is empty or not
         |
         */
        isEmail() {
            const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            return regEmail.test(this.email)
        },
        isEmailFull() {
            const email = this.$store.state.contactForm.body.user
            return email && email.length > 0
        },



        /*
         |---------------------------------------------------------------------
         | Form Values
         |---------------------------------------------------------------------
         |
         | Basic email validation using RegEx
         |
         |
         | ### Message and User
         | Message and User objects have getters and setters
         | which process value in the svuex store.
         |
         |
         |
         */
        email: {
            get() {
                return this.$store.state.contactForm.body.user
            },

            set(value) {
                this.$store.commit('updateUser', value)
            },
        },
        message: {
            get() {
                return this.$store.state.contactForm.body.message
            },

            set(value) {
                this.$store.commit('updateMessage', value)
            }
        }
    },



    methods: {


        sendMessage(e) {
            // preventing default behaviour of the form
            e.preventDefault()

            // getting stage names and values
            const { SUCCESS, PROCESSING, FAIL } = this.$store.state.contactForm.stages

            // Defining body of the request
            const BODY = {
                message: this.message,
                user: this.email
            }

            // Defining header of the request
            const HEADER = {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }

            // Setting form status to being processed
            this.$store.commit('updateStatus', PROCESSING)

            // ----------------------------------------------------------------
            // Request
            // ----------------------------------------------------------------
            fetch(`${window.location.origin}/api/new_message`,
            {
                method: 'POST',
                headers: HEADER,
                body: JSON.stringify(BODY)
            })
            .then( res => res.status === 200 && res.json())
            .then(json => {
                (json.message === 200)
                ? this.$store.commit('updateStatus', SUCCESS)
                : this.$store.commit('updateStatus', FAIL)
            })
            .catch( err => {
                this.$store.commit('updateStatus', fail)
                console.error(err)
            })
        }
    }
}
</script>



<style lang="stylus" scoped>
#FormBlock
    display flex
    flex-direction column
    background-color #ffefd9
    padding 2rem 4rem
    margin-top 1.6rem

    input, textarea
        border none
        background none
        font-size 1.6rem
        padding 0
        width 100%

        &::placeholder
            text-decoration underline
            font-weight 300
            font-size 1.6rem
            color alpha(#000, .25)
            transition color 250ms ease-in-out

        &:hover::placeholder
            color black
        &:focus
            outline none

    input[type="text"]
        margin 6% 0
        font-size 1rem
        height 2rem
    .is-full::before
        content "from"
        display inline-block
        margin-right .6em


    textarea
        resize none


    textarea
        flex 1

    button
        margin 2em 0
        background #000
        color #fff
        padding 1em
        font-size 1rem
        text-transform uppercase
        letter-spacing .2em
        margin 0
        border none
        cursor pointer
        outline none

        &:disabled
            display none




.fade-enter-active, .fade-leave-active
    transition: opacity .4s

.fade-enter, .fade-leave-to
    opacity: 0


.slide-enter-active, .slide-leave-active
    transition: all .4s

.slide-enter, .slide-leave-to
    opacity: 0
    transform translateY(100%)


</style>


