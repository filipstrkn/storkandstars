<template>
    <section id="ProjectImage">


        <image-loader
            class="image"
            :image="'https:' + blok.image"/>



    </section>
</template>



<script>

import ImageLoader from '~/components/Loaders/ImageLoader'

export default {
    name: 'ProjectImage',
    props: ['blok'],
    components: {
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus">

</style>
