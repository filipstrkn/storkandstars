<template>
    <section id="ParagraphRight" :class="{ 'paragraph-right--dark': $store.state.theme.dark }">



        <div class="text">
            <h3 v-if="content.title">{{ content.title }}</h3>
            <p class="_paragraph">{{ content.text }}</p>
        </div>



    </section>
</template>


<script>
export default {
    name: 'ParagraphRight',
    props: ['content']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ParagraphRight
    max-width 30em
    margin 0 0 0 auto
    padding 0 4em 0 0

    .text
        h3
            font-size 2em
            font-weight 400
            margin-bottom 1em

.paragraph-right--dark
    color $white
    *
        color $white

</style>


