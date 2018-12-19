<template>
    <main id="Projects">

        <div id="Content">
            <!-- <component
                v-if="story.content.component"
                :key="story.content._uid"
                :blok="story.content"
                :is="story.content.component">
            </component> -->


            <div class="filter">
                <h3>Fillter</h3>
            </div>

            <div class="list">

                <thumb
                    v-for="(project, index) in stories"
                    :key="index"
                    :blok="project" />

            </div>

        </div>




    </main>

</template>



<script>

import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import Thumb from '~/components/Thumb'

export default {


    data() {
        return {
            story: {
            content: {}
            }
        }
    },
    components: {
        'thumb': Thumb
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
            console.log(res.data)
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    }

}
</script>


<style lang="stylus">


#Content
    height 100vh
    width 100vw


.list
    column-count: 2
    column-gap: 5%
    max-width 90vw
    margin 0 auto
    padding 10em 2em
    .thumb
        display block
        // height 50vh
        width 100%
        margin 20% auto

        ._thumbnail
            width 100%

    .thumb--s ._thumbnail
        padding-bottom 80%
    .thumb--m ._thumbnail
        padding-bottom 90%
    .thumb--l ._thumbnail
        padding-bottom 100%
    .thumb--xl ._thumbnail
        padding-bottom 120%
    .thumb--tall ._thumbnail
        padding-bottom 150%








</style>



