<template>
    <div>
        <nuxt-link :to="'/' + link" class="thumb-link" :class="size" data-visible="false">
            <article class="thumb">


                <image-block
                    class="_clickable _thumbnail thumbnail--projects"
                    :image="content.thumbnail">
                </image-block>

                <!-- //////////////////////////////////////////////////////////////
                    Title
                ////////////////////////////////////////////////////////////// -->



            </article>

            <div class="name">
                <h3 :style="{color: content.text.color}">{{ content.client }}</h3>
                <p>
                    <span
                        v-for="(service, index) in content.services"
                        :key="index"
                        :style="{color: content.text.color}">{{ service }}</span>
                </p>
            </div>
        </nuxt-link>
    </div>

</template>


<script>


import isVisible from '~/mixins/isVisible'
import ImageBlock from '~/components/Loaders/ImageLoader'

export default {
    name: 'Thumb',
    props: ['content', 'link'],
    mixins: [isVisible],
    components: {
        'image-block': ImageBlock
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
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'


.thumb-link
    display inline-block
    position relative
    width 100%
    height 0
    p
        position relative
        font-family $secondary-font
        margin-top .4em
        font-size 1rem
        transition all 400ms ease-out
        white-space nowrap

        span
            font-weight 400
            color alpha(#000, .6)

            &::before
                content "&"
                display inline-block
                margin 0 .4em
            &:first-of-type::before
                display none

    &:hover
        ._thumbnail
            transform scale(.95)

        .name
            opacity 1
            p
                opacity 1

    &[data-visible="false"] .thumb
        transition all $appear ease-in
        transform translateY(2em)
        opacity 0


    &[data-visible="true"] .thumb
        transition all 600ms ease-out
        transform translateY(0)
        opacity 1


.thumb--square
    padding-bottom 100%
.thumb--tall
    padding-bottom 120%
.thumb--taller
    padding-bottom 150%


.thumb
    position relative
    position absolute
    width 100%
    height 100%
    transform-origin 50% 0







    h3
        font-weight 400
        pointer-events none
        margin-bottom .2em

        margin-top 1em
        font-family $secondary-font
        margin-bottom .2em



.name
    position absolute
    bottom -5em
    left 0
    pointer-events none

    h3
        font-weight 900
        margin 0
        font-size 1.6em
        font-family $secondary-font

    p
        opacity 0


._thumbnail
    width 100%
    height 100%
    transition all 150ms cubic-bezier(0.550, 0.085, 0.680, 0.530)

    img

        width 100%
        min-height 100%
        object-fit cover
        transition top 400ms ease-out
        pointer-events none



</style>


