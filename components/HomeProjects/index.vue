<template>
    <section id="HomeProjects" v-editable="blok">
        <block :ctx="content"></block>
        <thumb
            v-for="project in projects"
            :key="project._uid"
            :project="project">
        </thumb>
    </section>
</template>



<script>

import block from '../Block'
import thumb from '../Thumb'

export default {
    name: 'HomeProjects',
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
    computed: {
        projects() {
            return 3
        }
    },
    props: ['blok'],
    components: {
        block,
        thumb
    }
}
</script>



<style lang="stylus">
#HomeProjects
    // display flex
    & > *
        display inline-block
        vertical-align top
</style>


