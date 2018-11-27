<template>

    <nuxt-link :to="blok.link" class="thumb--spacer">
        <article class="thumb">



            <!-- //////////////////////////////////////////////////////////////
                Title
            ////////////////////////////////////////////////////////////// -->
            <div class="name">
                <h3>{{ blok.name }}</h3>
            </div>



            <!-- //////////////////////////////////////////////////////////////
                Image
            ////////////////////////////////////////////////////////////// -->
            <image-block
                class="_thumbnail _clickable thumbnail--projects"
                :image="blok.thumbnail">
            </image-block>



        </article>
    </nuxt-link>

</template>


<script>


import ImageBlock from '~/components/Loaders/ImageLoader'


export default {
    name: 'Thumb',
    props: ['blok'],
    components: {
        'image-block': ImageBlock
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'


.thumb
    position relative
    margin 0 4em

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

    &:hover
        ._thumbnail
            transform scale(.96)


</style>


