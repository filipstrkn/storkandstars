<template>
    <div>
        <h1>I AM SPECIAL</h1>
        <nuxt-link :to="'/'">back</nuxt-link>
    </div>
</template>



<script>
export default {


    asyncData(context) {
          // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API
        return context.app.$storyapi.get(`cdn/stories/specials/${context.params.special}`, {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    }


}
</script>
