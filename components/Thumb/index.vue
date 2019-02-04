<template>
    <nuxt-link :to="finalLink" class="thumb-link" :class="size" data-visible="false">
        <article class="thumb-link__body" @mouseenter="showThumb" @mouseleave="hideThumb">
            <div class="index">
                <span>0{{index + 1 }}</span>
            </div>





            <div class="body">
                <h3>{{ content.client }}</h3>

                <p v-if="isHover && !content.available" class="not-available">
                    <span>Brzy přidáme</span>
                </p>
                <p v-else >
                    <span
                        v-for="(service, index) in content.services"
                        :key="index">{{ service }}</span>
                </p>
            </div>

        </article>


        <transition name="fade">
            <div class="thumb-unit__image" v-show="isThumb">
                <image-block
                    class="_thumbnail thumbnail--projects"
                    :image="content.thumbnail">
                </image-block>
            </div>
        </transition>

    </nuxt-link>
</template>


<script>

import isVisible from '~/mixins/isVisible'
import ImageBlock from '~/components/Loaders/ImageLoader'

export default {
    name: 'Thumb',
    props: ['content', 'link', 'index'],
    mixins: [isVisible],
    components: {
        'image-block': ImageBlock
    },
    data() {
        return {
            visibleAt: 60,
            isHover: false,
            isThumb: false
        }
    },
    computed: {
        size() {
            const name = "thumb--"
            switch(this.content.thumb_size) {
                case 'square':
                    return name + this.content.thumb_size
                case 'tall':
                    return name + this.content.thumb_size
                case 'taller':
                    return name + this.content.thumb_size
                default:
                    return name + '--square'
            }
        },
        finalLink() {
            if ( !this.content.available ) return ''
            return '/' + this.link
        }
    },
    methods: {
        setHover(val) {
            this.isHover = val
        },
        showThumb() {
            this.isThumb = this.isHover = true
        },
        hideThumb() {
            this.isThumb = this.isHover = false
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'

.thumb-link__body
    display flex
    padding 2em 1rem
    margin 3em 0

    &:hover
        .index
            width 4rem
            opacity 0

        .body
            h3
                color $black

    .index
        position relative
        flex-grow 0
        flex-shrink 1
        font-family $font
        color alpha(#000, .45)
        width 2rem
        transition all 240ms ease-in-out
        span
            font-size 1rem
            top 1em
            left 0
            position absolute
    .body

        h3
            font-family $font
            font-weight 400
            font-size calc(.00848 * 100vw + 4.6rem)
            color alpha(#000, .45)
            @media screen and (max-width: 760px)
                font-size calc(.00848 * 100vw + 3rem)

            @media screen and (max-width: 400px)
                font-size calc(.00848 * 100vw + 2.4rem)

    p
        position relative
        font-family $font
        margin-top .4em
        font-size 1rem
        transition all 400ms ease-out
        white-space nowrap

        span
            font-weight 400
            color alpha(#000, .45)

            &::before
                content "/"
                display inline-block
                margin 0 .4em

            &:first-of-type
                margin-left 0

        &.not-available
            span
                &::before
                    content ""

    &:hover
        ._thumbnail
            transform scale(.95)

        .name
            opacity 1


    // &[data-visible="false"] .thumb
    //     transition all $appear ease-in
    //     transform scale(.8)


    // &[data-visible="true"] .thumb
    //     transition all 600ms ease-out
    //     transform scale(1)


.thumb
    position relative
    position absolute
    width 100%
    height 100%
    transform-origin center

    h3
        font-weight 400
        pointer-events none
        margin-bottom .2em

        margin-top 1em


.name
    position absolute
    top calc(100% + 1em)
    left 0
    pointer-events none

    h3
        margin 0



._thumbnail
    position absolute
    right 0
    top 50%
    transform translateY(-50%)
    width 60vh
    height 100vh

    @media screen and (max-width: 760px)
        absolute-centering()
        height 60vh
        width 40vh


    img

        width 100%
        min-height 100%
        object-fit cover
        transition top 400ms ease-out
        pointer-events none


.thumb-unit__image
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    z-index -1



</style>


