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

export default {
    name: 'Page',
    props: ['blok'],
    computed: {
        mode() {
            return this.$store.state.theme.dark_mode ? 'dark' : 'light'
        }
    },
    beforeMount() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


.page--dark
    background-color $dark
    color $white


</style>

