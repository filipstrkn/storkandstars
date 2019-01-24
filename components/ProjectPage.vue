<template>
    <main id="ProjectPage">

        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>


        <related-projects :current="blok" />

        <footer-block />

    </main>
</template>



<script>

import FooterBlock from '~/components/Home/Footer'
import RelatedProjects from '~/components/Project/RelatedProjects'

export default {
    name: 'Page',
    props: ['blok'],
    scrollToTop: false,
    components: {
        'footer-block': FooterBlock,
        'related-projects': RelatedProjects
    },

    created() {
        this.$store.commit('setTheme', {
            text: this.blok.theme_color,
            background: this.blok.theme_color,
        })
    },
    beforeMount() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

#ProjectPage
    min-height 100vh

.page--dark
    background-color $dark
    color $white


</style>

