<template>
    <section id="ProjectGallery">


        <img
            v-for="(image, index) in blok.images"
            :key="index"
            :src="image.filename">



    </section>
</template>



<script>
export default {
    name: 'ProjectGallery',
    props: ['blok']
}
</script>
