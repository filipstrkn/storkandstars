<template>

    <article class="thumb">

        <!-- If Thumbnail is Loading -->
        <thumb-loading v-if="isLoading"></thumb-loading>

        <!-- Thumb body -->
        <nuxt-link :to="project.full_slug" v-show="!isLoading">
            <div :id="`Thumb${project.id}`" class="thumb__body">
                <h3>{{ project.name }}</h3>
                <div class="thumbnail">
                    <img :src="project.content.thumbnail">
                </div>
            </div>
        </nuxt-link>
    </article>
</template>


<script>

import ThumbLoading from './_thumb/ThumbLoading'
import imageLoader from '~/mixins/imageLoader'

export default {
    name: 'Thumb',
    props: ['project'],
    components: {
        'thumb-loading': ThumbLoading
    },
    mixins: [imageLoader],
    data() {
        return {
            imageSelector: `#Thumb${this.project.id}`
        }
    }
}
</script>



<style lang="stylus">

@import '../../assets/stylus/variables'

$duration = 350ms

.thumb
    width $thumb-size
    height calc(90vh - 5em)
    margin 0 2rem
    position relative
    &:hover
        cursor pointer
        .thumbnail
            transform translate(-50%, -50%) scale(.97)

    h3
        position absolute
        margin 0
        top 5%
        left 5%
        transition all $duration ease-in-out
        z-index 3

.thumbnail
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 100%
    height 100%
    z-index 1
    transition all $duration ease-in-out
    overflow hidden

    img
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        min-height 100%
        min-width 100%
        max-height 200%
        z-index 1
        transition transform $duration ease-in-out



</style>


