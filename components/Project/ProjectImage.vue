<template>
    <section id="ProjectImage">

        <div class="project-image" data-visible="false">
            <image-loader
                v-editable="blok"
                class="project-image__image"
                :class="`project-image__image--${blok.type}`"
                :image="'https:' + blok.image"/>
        </div>

    </section>
</template>



<script>

import ImageLoader from '~/components/Loaders/ImageLoader'
import isVisible from '~/mixins/isVisible'

export default {
    name: 'ProjectImage',
    props: ['blok'],
    mixins: [isVisible],
    data() {
        return {
            visibleAt: 80,
            visibleOnce: true,
        }
    },
    components: {
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'

#ProjectImage
    padding 5% 0

    [data-visible="false"]
        opacity 0

    [data-visible="true"]
        opacity 1

.project-image
    transition opacity .4s ease-in

.project-image__image
    position relative
    width 84%
    max-width 120em
    height 0
    padding-bottom 40%
    padding-bottom 46%
    overflow hidden
    transition opacity $appear ease-out
    width 100%
    padding-bottom 50%
    max-width 54em

    ._image--loading
        position absolute
        top 0
        left 0

    img
        absolute-centering()
        width 100%
        height 100%
        object-fit cover

.project-image__image--center
    margin 0 auto


.project-image__image--left
    margin 0 auto 0 $spacing-flex

.project-image__image--right
    margin 0 $spacing-flex 0 auto
    @media screen and (max-width: 500px)
        padding-bottom 80%

.project-image__image--full
    width 100%
    padding-bottom 46%
    max-width none
    @media screen and (max-width: 500px)
        padding-bottom 80%




</style>
