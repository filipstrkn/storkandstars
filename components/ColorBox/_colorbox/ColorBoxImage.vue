<template>
    <div id="ColorBoxImage">
        <div data-visible="false">
            <image-loader
                class="colorbox-image__image"
                :image="image" />

            <span class="colorbox-image__bg" :style="color"></span>
        </div>

    </div>
</template>


<script>

import ImageLoader from '~/components/Loaders/ImageLoader'
import isVisible from '~/mixins/isVisible'

export default {
    name: 'ColorBoxImage',
    mixins: [isVisible],
    components: {
        'image-loader': ImageLoader
    },
    props: ['image', 'color'],
     data() {
        return {
            visibleOnce: true
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'

#ColorBoxImage
    position relative

    [data-visible]
        transition all .4s ease-out

    [data-visible="false"]
        opacity 0
        transform translateY(2em)

    [data-visible="true"]
        opacity 1
        transform translateY(0)


.colorbox-image__image
    position relative
    z-index 1
    margin 0 $spacing-flex 0 auto
    width 60vh
    height @width
    @media screen and (max-width: 760px)
        width 80vw
        height @width
        margin 0 auto

    img
        absolute-centering()
        width 100%
        height 100%
        object-fit cover


.colorbox-image__bg
    position absolute
    bottom 0
    left 0
    width 100%
    height 75%




</style>
