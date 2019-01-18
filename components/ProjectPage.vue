<template>
    <main id="ProjectPage" :style="theme">

        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>

        <footer-block />

    </main>
</template>



<script>

import FooterBlock from '~/components/Home/Footer'

export default {
    name: 'Page',
    props: ['blok'],
    scrollToTop: false,
    components: {
        'footer-block': FooterBlock
    },

    computed: {
        theme() {
            if ( !this.blok.apply_theme ) return
            return {
                backgroundColor: this.$store.state.theme.background
            }
        }
    },

    created() {
        this.$store.commit('setTheme', {
            text: this.blok.text.color,
            background: this.blok.background.color,
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

