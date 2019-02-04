<template>
    <main id="ProjectPage" class="__page">

        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>


        <related-projects :current="blok" />

    </main>
</template>



<script>

import RelatedProjects from '~/components/Project/RelatedProjects'

export default {
    name: 'Page',
    props: ['blok'],
    scrollToTop: false,

    components: {
        'related-projects': RelatedProjects
    },

    beforeMount() {
        this.$store.commit('toggleMenu', false)
    }
}
</script>