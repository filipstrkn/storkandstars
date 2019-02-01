<template>
    <section id="ParagraphQuote" :class="{ 'paragraph-quote--dark': $store.state.theme.dark }">



        <div class="title--h3">
            <h3 v-if="content.title" class="_subtitle">{{ content.title }}</h3>
            <p>{{ content.text }}</p>
        </div>



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
    // max-width 52em
    // margin 0 auto

    .title--h3
        max-width 28em
        margin 0 auto
        p
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


