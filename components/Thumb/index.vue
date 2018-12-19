<template>

    <article class="thumb" @mousedown="block">



        <!-- //////////////////////////////////////////////////////////////
            Image
        ////////////////////////////////////////////////////////////// -->
        <nuxt-link :to="'/'" class="thumb--spacer" draggable="false" @mousedown="block" @dragstart="block">
            <image-block
                class="_clickable _thumbnail thumbnail--projects"
                :image="content.thumbnail">
            </image-block>
        </nuxt-link>

        <!-- //////////////////////////////////////////////////////////////
            Title
        ////////////////////////////////////////////////////////////// -->
        <div class="name">
            <h3>{{ content.client }}</h3>
            <p>
                <span v-for="(service, index) in content.services" :key="index">{{ service }}</span>
            </p>
        </div>



    </article>

</template>


<script>


import ImageBlock from '~/components/Loaders/ImageLoader'


export default {
    name: 'Thumb',
    props: ['content'],
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
    -webkit-user-drag: none !important
    -khtml-user-drag: none !important
    -moz-user-drag: none !important
    -o-user-drag: none !important
    user-drag: none !important

    h3
        font-weight 400
        pointer-events none
        margin-bottom .2em
        margin-top 1em
        font-family $secondary-font
        margin-bottom .2em

    p
        font-family $secondary-font

        span
            font-weight 400
            color alpha(#000, .6)

            &::before
                content "&"
                display inline-block
                margin 0 .4em
            &:first-of-type::before
                display none


    ._thumbnail
        width 50vh
        height 70vh
        img
            width 100%
            height 100%
            object-fit cover
            object-position center
            transition transform 400ms ease-in-out


        &::before
            content ""
            position absolute
            top 0
            left 0
            width 100%
            height 100%

        &:hover
            img
                transform translate(-50%, -50%) scale(1.1)




</style>


