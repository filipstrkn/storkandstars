<template>
    <section id="ProjectList">
        <masonry :cols="2" :gutter="gutter" :columnClass="['project-list__column']">



            <!-- //////////////////////////////////////////////////////////////
                Thumb
            ////////////////////////////////////////////////////////////// -->
            <thumb
                v-for="(project, index) in projects"
                :key="index"
                :content="project.content"
                :link="project.full_slug"
                :visibleDeactivated="visibleDeactivated"
                class="list__item" />



        </masonry>
    </section>
</template>


<script>

import Thumb from '~/components/Thumb'

export default {
    name: 'ProjectList',
    props: ['projects', 'visibleDeactivated'],
    components: {
        'thumb': Thumb
    },
    computed: {
        gutter() {
            return {
                default: '8em',
                800: 40
            }
        }
    }
}
</script>



<style lang="stylus" scoped>

#ProjectList
    max-width 82em
    margin 0 auto
    padding 20% 6em 0 6em

    .list__item
        margin-top 50%
    .project-list__column:nth-child(odd)
        .list__item:first-of-type
            margin-top -20%

</style>
