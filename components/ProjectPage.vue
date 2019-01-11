<template>
    <main id="ProjectPage" :class="`page--${mode}`" :style="theme">

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

    components: {
        'footer-block': FooterBlock
    },

    computed: {
        mode() {
            return this.$store.state.theme.dark_mode ? 'dark' : 'light'
        },
        theme() {
            if ( this.$store.state.theme.dark_mode ) return
            return {
                backgroundColor: this.$store.state.theme.background
            }
        }
    },

    created() {
        this.$store.commit('setTheme', {
            dark_mode: this.blok.dark,
            text: this.blok.theme_color.color,
            background: this.blok.background.color,
        })
    },
    beforeMount() {
        this.$store.commit('toggleMenu', false)
    },
    destroyed() {
        this.$store.commit('setTheme', {
            dark_mode: false
        })
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

