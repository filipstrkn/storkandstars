<template>
    <div>
        <nuxt-link :to="'/' + link" class="thumb-link" data-visible="false">
            <article class="thumb" :style="theme">


                <image-block
                    class="_clickable _thumbnail thumbnail--projects"
                    :image="content.thumbnail">
                </image-block>

                <!-- //////////////////////////////////////////////////////////////
                    Title
                ////////////////////////////////////////////////////////////// -->
                <div class="name">
                    <h3 :style="{color: content.text.color}">{{ content.client }}</h3>
                    <p>
                        <span
                            v-for="(service, index) in content.services"
                            :key="index"
                            :style="{color: content.text.color}">{{ service }}</span>
                    </p>
                </div>



            </article>
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
        theme() {
            return {
                backgroundColor: this.content.thumb_theme.color
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
    padding-bottom 100%


    &[data-visible="false"] .thumb
        transition all $appear ease-in
        transform scaleY(1.4) translateY(30%)
        opacity 0


    &[data-visible="true"] .thumb
        transition all 600ms ease-out
        transform scaleY(1) translateY(0)
        opacity 1

.thumb
    position relative
    position absolute
    width 100%
    height 100%
    transform-origin 50% 0




    &:hover
        img
           top 40%

        .name
            bottom 10%
            opacity 1
            p
                transform translateY(0)


    h3
        font-weight 400
        pointer-events none
        margin-bottom .2em

        margin-top 1em
        font-family $secondary-font
        margin-bottom .2em

    p
        position relative
        font-family $secondary-font
        margin-top .2em
        font-size 1rem
        text-align center
        transform translateY(2em)
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

    .name
        position absolute
        bottom -1em
        text-align center
        margin 0
        left 50%
        transform translateX(-50%)
        transition all 400ms ease-in-out
        font-size calc(.00848 * 100vw + 18.81818px)
        opacity 0
        pointer-events none

        h3
            font-weight 900
            margin 0

    ._thumbnail
        width 100%
        height 100%

        img
            width 50%
            transition top 400ms ease-out
            pointer-events none



</style>


