<template>
    <nuxt-link v-if="blok.link_to.cached_url" :to="blok.link_to.cached_url">

        <section id="UpperFooter" class="_clickable">
            <div class="_content">
                <p class="_text--medium" v-html="text"></p>
            </div>
        </section>

    </nuxt-link>
</template>


<script>

import marked from 'marked'

export default {
    name: 'UpperFooter',
    props: ['blok'],
    computed: {
        text() {
            return marked(this.blok.title)
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#UpperFooter
    padding $spacing-flex 0
    margin-top $spacing-flex

    &:hover
        background-color alpha(#000, .03)


    p
        text-align center

    *
        pointer-events none


</style>
