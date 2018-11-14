<template>
    <transition name="slide">
        <form id="FormBlock" @submit="sendMessage">

            <!-- Email -->
            <div :class="{'is-full': isEmailFull}" class="container--email">
                <span>{{ placeholder.from }}</span>
                <input
                    v-model="email"
                    :id="`ContactFormEmail${identificator}`">
                <label
                    for="`ContactFormEmail${identificator}`">
                    {{ placeholder.email }}
                </label>
            </div>

            <!-- Message -->
            <div :class="{'is-full': isMessageFull}" class="container--message">
                <textarea
                    v-model="message"
                    :id="`ContactFormMessage${identificator}`">
                </textarea>
                <label
                    :for="`ContactFormMessage${identificator}`">
                    {{ placeholder.message }}
                </label>
            </div>


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
    props: ['placeholder', 'identificator'],


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

        isMessageFull() {
            const message = this.$store.state.contactForm.body.message
            return message && message.length > 0
        },

        /*
         |---------------------------------------------------------------------
         | Form Values
         |---------------------------------------------------------------------
         |
         | ### Message and User
         | Message and User objects have getters and setters
         | which process value in the svuex store.
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


@import '~assets/stylus/variables'
@import '~assets/stylus/transitions'
@import '~assets/stylus/reset'


#FormBlock
    display flex
    flex-direction column
    width 100%
    overflow hidden

    button
        margin 0 2rem 0 0
        background #000
        color #fff
        text-transform uppercase
        letter-spacing .2em

        &:disabled
            display none

    input, textarea
        font-size 1.6rem
        width 100%
        padding-right 2rem
        font-family: 'Karma', serif

        &:focus ~ label,
        &:hover ~ label
            color $black
            &::after
                bottom -1rem
                background-color $black
        & ~ label
            position absolute
            top 0
            left 0
            width 100%
            pointer-events none
            font-family: 'Karma', serif
            color alpha(#000, .3)
            font-size 1.6rem
            &::after
                content ""
                height 1px
                width 100%
                position absolute
                bottom -.4em
                left 0
                background-color alpha(#000, .3)
                transition bottom 250ms ease-in-out, opacity 250ms ease-in-out


.container--email,
.container--message
    position relative
    width 100%

    &.is-full
        & label
            display none

.container--email
    span
        vertical-align text-bottom
        display none
    &.is-full
        span
            display inline-block

.container--message
    flex 1
    display flex
    flex-direction column
    margin-top 10%


</style>


