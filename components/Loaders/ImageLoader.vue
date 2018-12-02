<template>
    <article>



        <!-- //////////////////////////////////////////////////////////////
            Image Loading screen
        ////////////////////////////////////////////////////////////// -->
        <div  v-if="isLoading" class="_image--loading"></div>


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
    mixins: [loadingImage]
}
</script>



<style lang="stylus">

.fade-enter-active, .fade-leave-active
    transition: opacity .5s

.fade-enter, .fade-leave-to
    opacity: 0

</style>
