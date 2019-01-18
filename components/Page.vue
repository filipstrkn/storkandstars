<template>
    <main id="Page">

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
    scrollToTop: false,
    beforeMount() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>