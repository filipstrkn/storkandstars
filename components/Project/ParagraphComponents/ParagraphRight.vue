<template>
    <section id="ParagraphRight">



        <div class="text">
            <h3 v-if="content.title" :style="theme" class="title--h3">{{ content.title }}</h3>
            <p class="_paragraph">{{ content.text }}</p>
        </div>



    </section>
</template>


<script>
export default {
    name: 'ParagraphRight',
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

@import '~assets/stylus/variables'

#ParagraphRight
    max-width 30em
    margin 0 $spacing-flex 0 auto

</style>


