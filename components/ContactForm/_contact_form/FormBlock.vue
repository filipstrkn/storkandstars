<template>
    <form id="FormBlock" @submit="sendMessage">
        <div :class="{'is-full': emailFull}">
            <input v-model="email" type="text" name="" id="" placeholder="Your email">
        </div>
        <textarea v-model="message" name="" id="" placeholder="What's your project?"></textarea>
        <transition name="pop">
            <button v-if="isEmail" type="submit">Send</button>
        </transition>
    </form>
</template>


<script>
export default {



    name: 'FormBlock',



    data() {
        return {
            email: '',
            message: '',
            status: ''
        }
    },



    computed: {

        /*
         |---------------------------------------------------------------------
         | Validation
         |---------------------------------------------------------------------
         |
         | Basic email validation using RegEx
         |
         */
        isEmail() {
            const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            return regEmail.test(this.email)
        },



        /*
         |---------------------------------------------------------------------
         | Validation
         |---------------------------------------------------------------------
         |
         | Basic email validation using RegEx
         |
         */
        emailFull() {
            return this.email && this.email.length > 0
        }
    },



    methods: {
        resetForm(){
            this.email = '',
            this.message = ''
        },
        setStatus(status) {
            switch(status) {
                case 200:
                    this.status = 'success'
                    break
                default:
                    this.status = 'error'
            }
        },
        sendMessage(e) {
            e.preventDefault()

            const BODY = {
                message: this.message,
                user: this.email
            }
            const HEADER = {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
           fetch(`${window.location.origin}/api/new_message`,
            {
                method: 'POST',
                headers: HEADER,
                body: JSON.stringify(BODY)
            }).then( res => {
                if ( res.status === 200 ) {
                    this.setStatus(res.status)
                    this.resetForm()
                } else {
                    console.error(res.status)
                }
            } )
        }
    }
}
</script>



<style lang="stylus" scoped>
#FormBlock
    display flex
    flex-direction column
    background-color #ffe8c9
    padding 2rem 4rem
    // box-sizing border-box

    input, textarea
        border none
        // border-bottom solid 1px
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
        margin 2em 0
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



</style>


