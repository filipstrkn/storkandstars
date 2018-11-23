<template>
    <component
        v-if="story.content.component && !loading"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component">
    </component>

    <h1 v-else>LOADING from PAGE COMPONENTS</h1>

</template>



<script>

import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {


    data() {
    return {
        story: {
        content: {}
        },
        loading: true
    }
    },


    mixins: [storyblokLivePreview],


    asyncData (context) {
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API

        return context.app.$storyapi.get('cdn/stories/projects', {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    },


    mounted () {

        console.log('I am Project Page')

        this.$nextTick(() => {
            this.$nuxt.$loading.start()

            this.$nextTick( () => {
                this.$nuxt.$loading.finish()
                this.loading = false
            })
        })
    }
}
</script>



<style>

</style>

