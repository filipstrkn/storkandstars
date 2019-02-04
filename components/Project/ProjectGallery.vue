<template>
    <section id="ProjectGallery">

        <draggable>

            <div class="project-gallery__images">
                <image-loader
                    v-for="(image, index) in blok.images"
                    :key="index"
                    :image="image.filename"
                    class="project-gallery__image" />
            </div>



        </draggable>
    </section>
</template>



<script>

import Draggable from '~/components/Draggable'
import ImageLoader from '~/components/Loaders/ImageLoader'

export default {
    name: 'ProjectGallery',
    props: ['blok'],
    components: {
        'draggable': Draggable,
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'


#ProjectGallery
    // padding 4em 0
    max-width 100%
    overflow hidden
    padding $spacing-flex 0
    @media screen and (max-width: 500px)
        padding $spacing-flex-mb 0

.project-gallery__images
    display flex
    align-items center
    // padding-left 5em

    .project-gallery__image
        margin-right 5em
        // &:first-of-type

        &:last-of-type
            margin-right 0 !important

.project-gallery__image
    flex-grow 1
    flex-shrink 0
    display inline-block
    position relative
    width 64vh
    height @width
    overflow hidden
    @media screen and (max-width: 500px)
        width 30vh
        height @width


    img
        absolute-centering()
        width 100%
        height 100%
        object-fit cover


</style>
