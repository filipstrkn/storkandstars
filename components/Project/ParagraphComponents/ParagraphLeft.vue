<template>
    <section id="ParagraphLeft">



        <div class="text">
            <h3 v-if="content.title" :style="theme" class="title--h3">{{ content.title }}</h3>
            <p class="_paragraph">{{ content.text }}</p>
        </div>



    </section>
</template>


<script>
export default {
    name: 'ParagraphLeft',
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

#ParagraphLeft
    max-width 30em
    margin 0 auto 0 $spacing-flex

</style>


