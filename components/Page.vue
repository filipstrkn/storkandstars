<template>
    <main id="Page" :class="`page--${mode}`">

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
    scrollToTop: true,
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
        }
    },

    created() {
        this.$store.commit('setMode', this.blok.dark)
    },

    beforeMount() {
        this.$store.state.sidelink = {
            name: this.blok.sidelink_name,
            to: this.blok.sidelink_to.cached_url
        }
    },

    destroyed() {
        this.$store.state.sidelink = null
    },
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


.page--dark
    background-color $dark
    color $white


</style>

