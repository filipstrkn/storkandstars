<template>
    <section>
        <div id="TopProjects">
            <block :ctx="content" v-editable="blok"></block>
            <thumb
                v-for="project in $store.state.top"
                :key="project._uid"
                :project="project">
            </thumb>
        </div>
    </section>
</template>



<script>

import block from '../Block'
import thumb from '../Thumb'
// import setWidthOfElement from '~/mixins/setWidthOfElement'


export default {
    name: 'TopProjects',
    data() {
        return {
            content: {
                title: this.blok.title,
                description: this.blok.description,
                link: {
                    name: this.blok.link_name,
                    to: this.blok.link_to.cached_url
                }
            }
        }
    },
    props: ['blok'],
    // mixins: [setWidthOfElement],
    components: {
        block,
        thumb
    },
    methods: {
        start () {
            $nuxt.$loading.start()
        },
        finish () {
            $nuxt.$loading.finish()
            console.log('LOADED BRO')
        }
    },
    created() {
        if (this.$store.state.top.length === 0 ) this.$store.dispatch('loadTop')
    },
}
</script>



<style lang="stylus">

#TopProjects > *
    display inline-block
    vertical-align top

</style>


