<template>

    <section id="RelatedProjects">
        <div class="related-projects__title _content">
            <h3>Mohlo by se vam libit</h3>
        </div>
        <project-list :projects="$store.state.projects.all" :filter="{ compareWith: this.current, action: 'related' }" />
    </section>

</template>


<script>

import ProjectList from '~/components/Lists/ProjectList'

export default {
    name: 'RelatedProjetcs',
    props: ['current'],
    components: {
        'project-list': ProjectList
    },
    created() {
        this.$store.dispatch('getAllProjects')
    }
}
</script>


<style lang="stylus" scoped>

</style>


