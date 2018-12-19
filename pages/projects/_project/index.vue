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



    mixins: [storyblokLivePreview],


    asyncData (context) {
        // console.log('Project from async')
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API

        return context.app.$storyapi.get(`cdn/stories/projects/${context.params.project}`, {
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

    //         this.$nextTick( () => {
    //             this.$nuxt.$loading.finish()
    //             this.loading = false
    //         })
    //     })
    // }
}
</script>


