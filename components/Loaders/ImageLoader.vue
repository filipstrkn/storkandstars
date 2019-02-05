<template>
    <article>



        <!-- //////////////////////////////////////////////////////////////
            Image Loading screen
        ////////////////////////////////////////////////////////////// -->
        <div
            v-if="isLoading"
            class="_image--loading"
            :class="theme"
            ></div>


        <!-- //////////////////////////////////////////////////////////////
            Loaded Image
            ////////////////////////////////////////////////////////////// -->
        <transition name="fade" v-else>
            <img :src="src" draggable="false">
        </transition>



    </article>
</template>



<script>

/*
|==============================================================================
| Image Loader
|==============================================================================
|
| What is it?
| ---
| A components that uses mixin @imageLoad to detect if a image has been
| successfuly loaded. The mixins uses Promise to detect the loading state.
| ---
| Image Loader via mixin receive data an object that contains 'isLoading'
| which can be used for condition rendering
|
|*/

import loadingImage from '~/mixins/loadingImage'

export default {
    name: 'ImageLoader',
    props: ['image'],
    mixins: [loadingImage],
    computed: {
        theme() {
            return this.$store.state.theme.dark && 'image-loading--dark'
        }
    }
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'

._image--loading
    background-color alpha($black, .05)
    width: 100%
    height @width

.image-loading--dark
    background-color alpha($white, .05)

</style>
