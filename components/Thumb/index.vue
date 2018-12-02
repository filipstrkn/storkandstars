<template>

    <article class="thumb" @mousedown="block">



        <!-- //////////////////////////////////////////////////////////////
            Title
        ////////////////////////////////////////////////////////////// -->
        <div class="name">
            <h3>{{ blok.name }}</h3>
        </div>



        <!-- //////////////////////////////////////////////////////////////
            Image
        ////////////////////////////////////////////////////////////// -->
        <nuxt-link :to="blok.link.cached_url" class="thumb--spacer" draggable="false" @mousedown="block" @dragstart="block">
            <image-block
                class="_thumbnail _clickable thumbnail--projects"
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
    margin 0 4.6em
    // margin 0 5em
    -webkit-user-drag: none !important
    -khtml-user-drag: none !important
    -moz-user-drag: none !important
    -o-user-drag: none !important
    user-drag: none !important

    .name
        transform rotate(90deg)
        position absolute
        top 0
        left -2em
        z-index 1
        width 1em
        white-space nowrap

    h3
        font-weight 400
        pointer-events none

    ._thumbnail
        transition all 250ms ease-in-out

        &::before
            content ""
            position absolute
            top 0
            left 0
            width 100%
            height 100%

    &:hover
        ._thumbnail
            // transform scale(.96)
            transform translateY(3%)


</style>


