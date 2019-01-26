<template>
    <main id="ProjectPage" class="__page">

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

    beforeMount() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>