<template>
    <section id="TopProjects">
        <block :ctx="content" v-editable="blok"></block>
        <thumb
            v-for="project in tops"
            :key="project._uid"
            :project="project">
        </thumb>
    </section>
</template>



<script>

import { mapActions } from 'vuex'

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
    computed: {
        tops() {
            return this.$store.getters.top
        }
    },
    created() {
        if (this.tops.length === 0 ) this.$store.dispatch('loadTop')
    },
}
</script>



<style lang="stylus">
#TopProjects
    // display flex
    & > *
        display inline-block
        vertical-align top
</style>


