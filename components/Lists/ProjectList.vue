<template>
    <section id="ProjectList" class="_content">
        <masonry :cols="2" :gutter="gutter" :columnClass="['project-list__column']">



            <!-- //////////////////////////////////////////////////////////////
                Thumb
            ////////////////////////////////////////////////////////////// -->
            <thumb
                v-for="(project, index) in filteredProjects"
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
    props: ['projects', 'visibleDeactivated', 'filter'],
    components: {
        'thumb': Thumb
    },
    computed: {
        gutter() {
            return {
                default: '8em',
                800: 40
            }
        },
        filteredProjects() {
            if (!this.filter) return this.projects

            switch(this.filter.action) {
                case 'related':
                    const comp = this.filter.compareWith
                    return this.projects.filter(project => project.content.client !== comp.client).slice(0, 3)
                default:
                    return;
            }
        }
    }
}
</script>



<style lang="stylus" scoped>

#ProjectList
    // max-width 82em
    // margin 0 auto
    // padding 20% 6em 0 6em
    padding-top 20%

    .list__item
        margin-top 60%
    .project-list__column:nth-child(odd)
        .list__item:first-of-type
            margin-top -20%

</style>
