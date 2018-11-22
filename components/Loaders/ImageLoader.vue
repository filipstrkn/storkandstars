<template>
    <article>
        <transition name="fade">

            <!-- //////////////////////////////////////////////////////////////
                Image Loading screen
             ////////////////////////////////////////////////////////////// -->
            <div v-if="isLoading" class="_image--loading"></div>



            <!-- //////////////////////////////////////////////////////////////
                Loaded Image
             ////////////////////////////////////////////////////////////// -->
            <img v-else :src="src">

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