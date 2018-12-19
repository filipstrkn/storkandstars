<template>
    <div>



        <component
            v-if="story.content.component"
            :key="story.content._uid"
            :blok="story.content"
            :is="story.content.component">
        </component>





    </div>

</template>



<script>

import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {


    data() {
        return {
            story: {
            content: {}
            }
        }
    },



    transition: {
        name: 'page'
    },


    mixins: [storyblokLivePreview],


    asyncData (context) {
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API

        return context.app.$storyapi.get('cdn/stories/home', {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    },


    // mounted () {
    //     this.$nextTick(() => {
    //         this.$nuxt.$loading.start()

    //         setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    //     })
    // }
}
</script>


