<template>

    <article class="thumb" @mousedown="block" :class="`thumb--${blok.size}`">



        <!-- //////////////////////////////////////////////////////////////
            Title
        ////////////////////////////////////////////////////////////// -->
        <div class="name">
            <h3>{{ blok.name }}</h3>
            <h3><span>Branding</span><span>Products</span></h3>
        </div>



        <!-- //////////////////////////////////////////////////////////////
            Image
        ////////////////////////////////////////////////////////////// -->
        <nuxt-link :to="blok.link.cached_url" class="thumb--spacer" draggable="false" @mousedown="block" @dragstart="block">
            <image-block
                class="_thumbnail thumbnail--projects"
                :image="blok.thumbnail">
            </image-block>
        </nuxt-link>



    </article>

</template>


<script>


import ImageBlock from '~/components/Loaders/ImageLoader'


export default {
    name: 'Thumb',
    props: ['blok'],
    components: {
        'image-block': ImageBlock
    },
    methods: {
        block(e) {
            e.preventDefault()
            return false
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'

.thumb__spacer
    -webkit-user-drag: none
    -khtml-user-drag: none
    -moz-user-drag: none
    -o-user-drag: none
    user-drag: none

.thumb
    position relative
    margin 0 6em
    // margin 0 5em
    -webkit-user-drag: none !important
    -khtml-user-drag: none !important
    -moz-user-drag: none !important
    -o-user-drag: none !important
    user-drag: none !important

    &--small
        ._thumbnail
            width 40vh !important
            height @width

    &--medium
        ._thumbnail
            width 60vh !important
            height @width

    &--large
        ._thumbnail
            width 74vh !important
            height @width

    &--extra
        ._thumbnail
            width 92vh !important
            height @width

    &--tall
        ._thumbnail
            width 50vh !important
            height 70vh

    &--long
        ._thumbnail
            width 80vh !important
            height 50vh

    .name
        // transform rotate(90deg)
        opacity 0
        position absolute
        bottom 0
        left 50%
        transform translate(-50%, 50%)
        transition transform 250ms ease-out, opacity 250ms ease-out
        // left -2em1
        text-align center
        z-index 1
        // width 1em
        white-space nowrap

    h3
        font-weight 500
        pointer-events none
        margin-bottom .2em
        &:last-of-type
            margin-bottom 0
        span
            text-decoration underline

            &::before
                content "&"
                display inline-block
                margin 0 .4em
            &:first-of-type::before
                content ""


    ._thumbnail
        transition all 400ms ease-out
        img
            width 100%
            height 100%
            object-fit cover


        &::before
            content ""
            position absolute
            top 0
            left 0
            width 100%
            height 100%

    &:hover
        .name
            display block
            transform translate(-50%, 30%)
            opacity 1
    //     ._thumbnail
    //         // width $thumb-size - 10
    //         height 50vh
    //         // transform scale(.96)
    //         // transform translateY(2vh)
    //         img
    //             width 120%






</style>


