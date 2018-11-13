<template>
    <section id="ContactForm" v-editable="blok">

        <form-message :message="message"></form-message>

        <form-block
            v-if="!$store.getters.isMessageSent && !$store.state.contactForm.status"
            :placeholder="placeholder">
        </form-block>

    </section>
</template>



<script>

import FormBlock from './_contact_form/FormBlock'
import FormMessage from './_contact_form/FormMessage'


export default {
    name: 'ContactForm',
    props: ['blok'],
    components: {
        'form-block': FormBlock,
        'form-message': FormMessage
    },
    data() {
        return {
            placeholder: {
                email: this.blok.email,
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
     }
}
</script>


<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ContactForm
    padding 0
    box-sizing border-box
    margin-left 12em
    display flex
    height calc(90vh - 5em)
    flex-direction column
    min-width $thumb-size + 20
    & > form
        flex-grow 1

</style>


