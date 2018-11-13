<template>
    <section id="TopProjects">
        <block :ctx="content" v-editable="blok"></block>
        <thumb
            v-for="project in $store.state.top"
            :key="project._uid"
            :project="project">
        </thumb>
    </section>
</template>



<script>

import block from '../Block'
import thumb from '../Thumb'

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
    components: {
        block,
        thumb
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


