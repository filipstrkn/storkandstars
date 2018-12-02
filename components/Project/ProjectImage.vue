<template>
    <section id="ProjectImage">


        <image-loader
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
