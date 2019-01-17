<template>
    <main id="Projects" class="_page">

        <div class="_page__content">

            <div class="intro">
                <div class="_text--large title">
                    <p>Vítejte v šuplíku našich projektů.</p>
                </div>

                <filter-block :filters="stories" @filtering="setFilters" />
            </div>


            <project-list :projects="filtered" :visibleDeactivated="true" />

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

.intro
    padding 10% 10% 0 10%

    .title
        max-width 20em

</style>
