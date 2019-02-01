<template>
    <section id="ProjectList">
        <!-- <masonry :cols="2" :gutter="gutter" :columnClass="['project-list__column']">



            <thumb
                v-for="(project, index) in filteredProjects"
                :key="index"
                :content="project.content"
                :link="project.full_slug"
                :visibleDeactivated="visibleDeactivated"
                class="list__item" />



        </masonry> -->


        <thumb
            v-for="(project, index) in filteredProjects"
            :key="index"
            :content="project.content"
            :link="project.full_slug"
            :index="index"
            :visibleDeactivated="visibleDeactivated"
            class="list__item" />


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
                default: '24em',
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
    max-width 78em
    margin 0 auto
    padding 0 5%
    // padding-top 16%

    // .list__item
    //     margin-top 100%
    // .project-list__column:nth-child(even)
    //     .list__item:first-of-type
    //         // margin-top -20%
    //         margin-top 0

</style>
