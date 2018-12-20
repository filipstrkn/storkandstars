<template>
    <main id="ProjectPage" :class="`page--${mode}`" :style="theme">

        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>


    </main>
</template>



<script>

import HeaderBlock from '~/components/HeaderBlock'
import SideLink from '~/components/Home/_home/SideLink'

export default {
    name: 'Page',
    props: ['blok'],

    components: {
        'header-block': HeaderBlock,
        'side-link': SideLink
    },

    computed: {
        mode() {
            return this.$store.state.theme.dark_mode ? 'dark' : 'light'
        },
        process() {
            return this.$store.state.process
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

