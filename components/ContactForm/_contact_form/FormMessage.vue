<template>
    <div id="FormMessage" :class="`status--${$store.state.contactForm.status}`">
        <h1
            class="title--h3">
            <span>{{ messageText.emoji }}</span>{{ messageText.text }}
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
                return {
                    emoji: '',
                    text: this.message.processing
                    }
            } else if ( this.$store.getters.isMessageSent && status === 'success' ) {
                return {
                    emoji: '🤘',
                    text: this.message.success}
            } else if ( !this.$store.getters.isMessageSent && status === 'fail' ) {
                return {
                    emoji: '🔥',
                    text: this.message.fail
                }
            } else {
                return {
                    emoji: '',
                    text: this.message.default}
            }
        }
    }
}
</script>


<style lang="stylus">

#FormMessage
    transition all .4s ease-in-out

    // h1
    //     margin 0

// .status--success::before
//     content "\xE2\x9C\x8C"
//     display inline-block

.status--success,
.status--processing,
.status--fail
    h1
        font-family: 'Karma', serif !important
        span
            margin-right .2em

.status--processing
    h1
        color alpha(#000, .4)


</style>


