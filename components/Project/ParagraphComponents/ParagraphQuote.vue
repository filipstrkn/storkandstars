<template>
    <section id="ParagraphQuote">



        <div class="title--h3">
            <h3 v-if="content.title" :style="theme" class="_subtitle">{{ content.title }}</h3>
            <p>{{ content.text }}</p>
        </div>



    </section>
</template>


<script>
export default {
    name: 'ParagraphQuote',
    props: ['content'],
    computed: {
        theme() {
            if (!this.content.apply_theme) return
            return {
                color: this.$store.state.theme.text
            }
        }
    }

}
</script>



<style lang="stylus" scoped>

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


</style>


