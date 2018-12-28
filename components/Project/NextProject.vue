<template>
    <section class="next_project _container--large">
        <h3>{{ blok.pre_title }}</h3>
        <link-unit :to="link" class="link">
            {{ blok.project }}
        </link-unit>
    </section>
</template>



<script>

import LinkUnit from '~/components/Home/_home/LinkUnit'

export default {
    name: 'NextProject',
    props: ['blok'],
    components: {
        'link-unit' : LinkUnit
    },
    computed: {
        link() {
            return '/'+this.blok.link.cached_url
        }
    }
}
</script>

<style lang="stylus" scoped>

.next_project
    padding 10% 0

    h3
        margin-bottom 2em

.link
    font-size 2em

</style>
