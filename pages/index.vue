<template>
    <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component">
    </component>
    <!-- Logo -->

    <!--
      # intro block
      - setting title
      - setting cycling
      - setting
      - setting background color
      - setting foreground color
      - setting bacground video / image
      - video / image toggle
     -->

    <!--
      Burger
     -->

     <!--
       # HomePage
       1) intro // video s rukama : rychly sestrich
       2) top projects
       4) blog / articles
       5) footer
      -->

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


    components: {}
    }
</script>



<style>

</style>

