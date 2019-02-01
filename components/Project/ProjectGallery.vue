<template>
    <section id="ProjectGallery" :style="{backgroundColor: $store.state.theme.background}">
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
    padding $spacing-flex 0

.project-gallery__images
    display flex
    align-items center
    // padding-left 5em
    & > *
        margin-right 5em

    *:last-of-type
        margin-right 0 !important

.project-gallery__image
    position relative
    width 64vh
    height 64vh
    overflow hidden


    img
        absolute-centering()
        width 100%
        height 100%
        object-fit cover


</style>
