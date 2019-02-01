<template>
    <nuxt-link
        v-if="blok.link_to.cached_url"
        :to="blok.link_to.cached_url">

        <section
            id="UpperFooter"
            class="upperfooter _clickable"
            :class="{'upperfooter--dark': $store.state.theme.dark}">
            <div class="_content">
                <div class="_text--medium" v-html="text"></div>
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



<style lang="stylus">

@import '~assets/stylus/variables'

#UpperFooter
    padding $spacing-flex 0
    margin-top $spacing-flex

.upperfooter
    &:hover
        background-color alpha(#000, .03)

    *
        pointer-events none

    // p
    //     text-align center


.upperfooter--dark
    background-color alpha(#fff, .03) !important
    color $white
    *
        color $white
    // &:hover

</style>
