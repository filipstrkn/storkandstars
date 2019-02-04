<template>
    <section id="ParagraphQuote" :class="{ 'paragraph-quote--dark': $store.state.theme.dark }">

        <p class="_text--medium">{{ content.text }}</p>


    </section>
</template>


<script>
export default {
    name: 'ParagraphQuote',
    props: ['content']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ParagraphQuote
    padding $spacing-flex 0 0 0
    p
        font-family $serif
        max-width 34em
        margin 0 auto
        line-height 1.6

        &::before,
        &::after
            content '"'
            display inline
        &::before
            margin-left -.5em


.paragraph-quote--dark
    color $white
    *
        color $white

</style>


