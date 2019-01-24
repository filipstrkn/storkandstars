<template>
    <main id="Projects" class="_page">

        <div class="_page__content">

            <div class="projects__intro _content">
                <div class="projects-intro__title">
                    <p>Vítejte v šuplíku našich projektů.</p>
                </div>

                <filter-block :filters="stories" @filtering="setFilters" />
            </div>


            <project-list :projects="filtered" />

        </div>

        <footer-block />

    </main>

</template>



<script>

import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import FilterBlock from '~/components/Lists/_lists/FilterBlock'
import ProjectList from '~/components/Lists/ProjectList'
import FooterBlock from '~/components/Home/Footer'

export default {


    data() {
        return {
            filtered: []
        }
    },
    components: {
        'filter-block': FilterBlock,
        'footer-block': FooterBlock,
        'project-list': ProjectList
    },

    mixins: [storyblokLivePreview],

    methods: {
        setFilters(filtered) {
            this.filtered = filtered
        }
    },

    asyncData (context) {
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API

        return context.app.$storyapi.get('cdn/stories', {
            version,
            starts_with: 'projects/'
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    },
    beforeMount() {
        this.$store.commit('toggleMenu', false)
    },

}
</script>



<style lang="stylus" scoped>

._page__content
    margin-bottom 10%
    padding-top 10em

// .projects__intro
//     padding-top calc(5em + 2%)
.projects-intro__title
    font-size calc(.01212*100vw + 1rem)
    font-weight 600


</style>
