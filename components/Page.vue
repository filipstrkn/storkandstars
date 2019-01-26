<template>
    <main id="Page" class="__page">

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
    components: {
        'footer-block': FooterBlock
    },
    props: ['blok'],
    scrollToTop: false,
    beforeMount() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>