<template>
    <section id="TextBlock">

        <div class="text-block__content">
            <div class="text-block__text">
                <p>{{ blok.text }}</p>
                <link-unit :to="blok.link_to.cached_url">
                    {{ blok.link_name }}
                </link-unit>
            </div>
        </div>




    </section>
</template>



<script>

import isVisible from '~/mixins/isVisible'
import LinkUnit from '~/components/Home/_home/LinkUnit'

export default {
    name: 'TextBlock',
    props: ['blok'],
    mixins: [isVisible],
    components: {
        'link-unit': LinkUnit
    }
}

</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'

#TextBlock
    padding $spacing-flex 2em

.text-block__content
    position relative
    max-width 76em
    margin 0 auto
    padding 1em
    background-color #bff9f2
    // &::after
    //     content ""
    //     position absolute
    //     width 100%
    //     height calc(100% - (1rem + 46 * ((100vw - 320px) / 680)))
    //     left 0
    //     bottom 0
    //     z-index 0

    .text-block__text
        position relative
        z-index 1
        padding 7em

    // h3
    //     font-size calc(1rem + 46 * ((100vw - 320px) / 680))


    p
        font-size 2.6em
        max-width 13em
        margin-bottom 1em
        font-weight 900
        font-family $secondary-font

</style>
