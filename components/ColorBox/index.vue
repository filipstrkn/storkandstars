<template>

    <section id="ColorBox">
        <colorbox-image v-if="blok.image" :image="blok.image" :color="color" />
        <div class="colorbox__body" :style="color">

            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                :blok="blok"
                :is="blok.component">
            </component>

        </div>
    </section>

</template>



<script>

import ColorBoxImage from './_colorbox/ColorBoxImage'

export default {
    name: 'ColorBox',
    components: {
        'colorbox-image': ColorBoxImage
    },
    props: ['blok'],
    computed: {
        color() {
            return {
                'background-color': this.blok.color.color
            }
        }
    }
}
</script>