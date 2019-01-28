<template>
    <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component">
    </component>
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



    mixins: [storyblokLivePreview],


    asyncData (context) {
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API

        return context.app.$storyapi.get(`cdn/stories/projects/${context.params.project}`, {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    }

}
</script>


