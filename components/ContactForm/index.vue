<template>
    <section id="ContactForm">
        <h1
            v-if="!$store.getters.isMessageSent"
            class="title--h3"
            v-editable="blok">
            {{ blok.title }}
        </h1>

        <form-block
            v-if="!$store.getters.isMessageSent && !$store.state.contactForm.status"
            :placeholder="placeholder">
        </form-block>
        <form-message
            v-else
            :message="message">
        </form-message>

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
                message: this.blok.message
            },
            message: {
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
    flex-direction column
    min-width $thumb-size + 20
    & > form
        flex-grow 1
        max-height 40em

</style>


