<template>
    <section id="ParagraphLeft" :class="{ 'paragraph-left--dark': $store.state.theme.dark }">



        <div class="text">
            <h3 v-if="content.title">{{ content.title }}</h3>
            <p class="_paragraph">{{ content.text }}</p>
        </div>



    </section>
</template>


<script>
export default {
    name: 'ParagraphLeft',
    props: ['content']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ParagraphLeft
    max-width 30em
    padding $spacing-flex 0 0 0

    .text
        h3
            font-size 2em
            font-weight 400
            margin-bottom 1em

.paragraph-left--dark
    color $white
    *
        color $white




</style>


