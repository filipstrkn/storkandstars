<template>
    <section>
        <div id="ContactForm" v-editable="blok">

            <!-- Text -->
            <form-message :message="message"></form-message>

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
     }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ContactForm
    display flex
    flex-direction column
    height calc(90vh - 5em)
    min-width $thumb-size + 30
    // margin-left 12em
    // padding-left 12em
    & > *
        padding-left 12rem
    & > form
        flex-grow 1

</style>


