<template>
    <div id="FormMessage" :class="`status--${$store.state.contactForm.status}`">
        <h1
            class="title--h3">
            {{ messageText }}
        </h1>
    </div>
</template>


<script>
export default {
    name: 'FormMessage',
    props: ['message'],
    computed: {
        messageText() {

            const { status } = this.$store.state.contactForm

            if ( status === 'processing') {
                return this.message.processing
            } else if ( this.$store.getters.isMessageSent && status === 'success' ) {
                return this.message.success
            } else if ( !this.$store.getters.isMessageSent && status === 'fail' ) {
                return this.message.fail
            } else {
                return this.message.default
            }
        }
    }
}
</script>


<style lang="stylus">

#FormMessage
    transition all .4s ease-in-out

    h1
        margin 0

.status--success
    background-color #c9ffe7
    box-shadow 0 0 0 2rem @background-color

.status--processing
    h1
        color alpha(#000, .4)

.status--fail
    background-color #ffd559
    box-shadow 0 0 0 2rem @background-color

</style>


