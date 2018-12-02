<template>
    <section id="Form">


        <component
            v-if="story.content.component"
            :key="story.content._uid"
            :blok="story.content"
            :is="story.content.component">
        </component>


    </section>
</template>



<script>
export default {


    data() {
        return {
            story: {},
            content: {}
        }
    }
,


    transition: 'page-slide-right',




    // --------------------------------------------------------------------
    //  Switching Dark Mode when mounted and umounted
    // --------------------------------------------------------------------
    //
    // Forms are in dark mode, that means that they have dark / black
    // background and light font colors. Therefore the entire
    // app has to know about this change. For that reason we set
    // that attribute in the $store and letting know about that
    // for example the logo and the burger.
    //
    //
    // mounted() {
    //     this.$store.commit('setMode', false)
    // },
    // destroyed() {
    //     this.$store.commit('setMode', true)
    // },



    // --------------------------------------------------------------------
    //  Getting the data on the server
    // --------------------------------------------------------------------
    //
    asyncData (context) {
        // console.log('Project from async')
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API

        return context.app.$storyapi.get(`cdn/stories/form/${context.params.form}`, {
            version: version
        }).then((res) => {
            return res.data
        }).catch((res) => {
            context.error({ statusCode: res.response.status, message: res.response.data })
        })
    }



}
</script>


<style lang="stylus">

#Form
    display flex
    width 100%
    height 100vh
    padding 5%
    box-sizing border-box
    align-items center
    justify-content center
    position relative


</style>
