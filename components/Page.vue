<template>
    <main id="Page" class="_page" :class="$store.state.theme.dark && 'page--dark'">

        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>

    </main>
</template>



<script>

import FooterBlock from '~/components/Home/Footer'


export default {
    name: 'Page',
    components: {
        'footer-block': FooterBlock
    },
    props: ['blok'],
    scrollToTop: false,
    created() {
        this.$store.commit('setTheme', { dark: this.blok.dark_mode })
    },
    beforeMount() {
        // if (this.$store.state.theme.dark) document.body.style.background = '#000'
        this.$store.commit('toggleMenu', false)
    },
    destroyed() {
        // document.body.style.background = ''
        this.$store.commit('setTheme', { dark: false })
    }
}
</script>


<style lang="stylus" scoped>

@import '~assets/stylus/variables'

.page--dark
    background-color $black


</style>
