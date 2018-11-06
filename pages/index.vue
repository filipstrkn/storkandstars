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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

