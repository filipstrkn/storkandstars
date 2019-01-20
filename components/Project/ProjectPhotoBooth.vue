<template>
    <section id="ProjectPhotoBooth">


        <image-loader
            v-for="image in blok.images"
            :key="image._uid"
            :image="image.filename" />


    </section>
</template>



<script>

import ImageLoader from '~/components/Loaders/ImageLoader'

export default {
    name: 'ProjectPhotoBooth',
    props: ['blok'],
    components: {
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus" scoped>

</style>
