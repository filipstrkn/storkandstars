<template>
    <section id="ContactForm">
        <h1 class="title--h3" v-editable="blok">{{ blok.title }}</h1>

        <form-block></form-block>
        <!-- SUCCESS Components-->
    </section>
</template>



<script>

import FormBlock from './_contact_form/FormBlock';
 './_contact_form/FormBlock'

export default {
    name: 'ContactForm',
     props: ['blok'],
     components: {
         'form-block': FormBlock
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

//    h1


</style>


