<template>
    <section id="ProjectGallery">

        <draggable>
            <img
                v-for="(image, index) in blok.images"
                :key="index"
                :src="image.filename">
        </draggable>




    </section>
</template>



<script>

import Draggable from '~/components/Draggable'

export default {
    name: 'ProjectGallery',
    props: ['blok'],
    components: {
        'draggable': Draggable
    }
}
</script>
