<template>
    <main id="Projects">


        <div class="filter-unit">
            <h3 @click="showFilters">Zobrazit:<span class="_clickable">{{ selectedFilter }}</span></h3>

            <transition name="fade">
                <ul class="filters" v-show="areFilters">
                    <li @click="resetFilter" class="_clickable">{{ defaultFilter }}</li>
                    <li v-for="(filter, index) in filters" :key="index" @click="setFilter" class="_clickable">{{ filter }}</li>
                </ul>
            </transition>
        </div>

        <div class="list">

            <thumb
                v-for="(project, index) in filtered"
                :key="index"
                :content="project.content"
                :link="project.full_slug" />

        </div>


        <footer-block />

    </main>

</template>



<script>

import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Thumb from '~/components/Thumb'
import FooterBlock from '~/components/Home/Footer'

export default {


    data() {
        return {
            story: {
                content: {}
            },
            filter: '',
            defaultFilter: 'Vše',
            areFilters: false
        }
    },
    components: {
        'thumb': Thumb,
        'footer-block': FooterBlock
    },

    computed: {
        filters() {
            // Getting filters
            const filters = []
            this.stories.map( story => story.content.services.forEach( service => filters.push(service) ) )

            // Unique filters
            let unique = [... new Set(filters)]
            return unique
        },

        selectedFilter() {
            if ( this.filter === '' ) return this.defaultFilter
            else return this.filter
        },

        filtered() {
            if ( this.filter === '' ) {
                return this.stories
            } else {
                return this.stories.filter( story => story.content.services.includes(this.filter) )
            }
        }
    },


    methods: {
        setFilter(e) {
            this.filter = e.target.innerText
        },
        resetFilter() {
            this.filter = ''
        },
        showFilters() {
            this.areFilters = !this.areFilters
        }
    },


    mixins: [storyblokLivePreview],


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
    }

}
</script>


<style lang="stylus">


// Filters
.filter-unit
    margin 20em 0 2em 0
    padding 0 10%

    h3
        display inline-block
        font-size 2em
        font-weight 400
        color alpha(#000, .3)

        span
            font-weight 500
            cursor pointer
            color #000

.filters
    list-style none
    margin-top 2em

    li
        display inline-block
        margin 1em 2em
        cursor pointer




.list
    display grid
    justify-content center
    grid-template-columns repeat(auto-fill, 50vh)
    grid-gap 5em
    padding 10em 2%

    .thumb
        display inline-block







</style>



