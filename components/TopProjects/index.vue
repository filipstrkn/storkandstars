<template>
    <section id="TopProjects" v-editable="blok">
        <!-- <link-block :ctx="content" v-editable="blok"></link-block> -->

        <component
            :key="blok._uid"
            v-for="blok in blok.projects"
            :blok="blok"
            :is="blok.component">
        </component>


        <!-- <thumb
            v-for="project in $store.state.top"
            :key="project._uid"
            :project="project">
        </thumb> -->
    </section>
</template>



<script>

import LinkBlock from '~/components/LinkBlock'
import thumb from '../Thumb'
// import setWidthOfElement from '~/mixins/setWidthOfElement'


export default {
    name: 'TopProjects',
    // data() {
    //     return {
    //         content: {
    //             title: this.blok.title,
    //             description: this.blok.description,
    //             link: {
    //                 name: this.blok.link_name,
    //                 to: this.blok.link_to.cached_url
    //             }
    //         }
    //     }
    // },
    props: ['blok'],
    // mixins: [setWidthOfElement],
    components: {
        'link-block': LinkBlock,
        thumb
    },
    // methods: {
    //     start () {
    //         $nuxt.$loading.start()
    //     },
    //     finish () {
    //         $nuxt.$loading.finish()
    //         console.log('LOADED BRO')
    //     }
    // },
    // created() {
    //     if (this.$store.state.top.length === 0 ) this.$store.dispatch('loadTop')
    // },
}
</script>



<style lang="stylus">

#TopProjects > *
    display inline-block
    vertical-align middle

</style>


