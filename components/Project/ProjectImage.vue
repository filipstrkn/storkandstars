<template>
    <section id="ProjectImage">


        <image-loader
            class="project-image__image"
            data-visible="false"
            :image="'https:' + blok.image"/>



    </section>
</template>



<script>

import ImageLoader from '~/components/Loaders/ImageLoader'
import isVisible from '~/mixins/isVisible'

export default {
    name: 'ProjectImage',
    props: ['blok'],
    mixins: [isVisible],
    components: {
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'

#ProjectImage
    padding 4em 0

    [data-visible="false"]
        transition opacity $appear ease-in
        opacity 0

    [data-visible="true"]
        transition opacity $appear ease-out
        opacity 1


.project-image__image
    position relative
    width 84%
    max-width 120em
    height 0
    padding-bottom 40%
    margin 0 auto
    overflow hidden

    img
        absolute-centering()
        width 100%
        height 100%
        object-fit cover





</style>
