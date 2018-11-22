<template>

    <nuxt-link :to="project.full_slug" class="thumb--spacer">
        <article class="_container--thumb thumb">



            <!-- //////////////////////////////////////////////////////////////
                Title
            ////////////////////////////////////////////////////////////// -->
            <h3>{{ project.name }}</h3>


            <!-- //////////////////////////////////////////////////////////////
                Image
            ////////////////////////////////////////////////////////////// -->
            <image-block
                class="_thumbnail"
                :image="project.content.thumbnail">
            </image-block>



        </article>
    </nuxt-link>

</template>


<script>


import ImageBlock from '~/components/Loaders/ImageLoader'


export default {
    name: 'Thumb',
    props: ['project'],
    components: {
        'image-block': ImageBlock
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

.thumb--spacer
    margin 0 $spacing--small

.thumb:hover
    cursor pointer
    ._thumbnail
        transform translate(-50%, -50%) scale(.97)



</style>


