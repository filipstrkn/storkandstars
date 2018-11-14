<template>
    <article class="post">

        <post-loading v-if="isLoading"></post-loading>

        <article class="post__body">
            <nuxt-link to="/" v-show="!isLoading">
                <div :id="`Thumb${blok._uid}`" class="post__image" :style="thumbnail"></div>
                <div class="post__details">
                    <h3>{{ blok.title }}</h3>
                    <p>{{ blok.description }}</p>
                </div>
            </nuxt-link>
        </article>
    </article>
</template>



<script>

import PostLoading from './_post/PostLoading'
import imageLoader from '~/mixins/imageLoader'

export default {
    name: 'Post',
    props: ['blok'],
    components: {
        'post-loading': PostLoading
    },
    data() {
        return {
            imageSelector: `#Thumb${this.blok._uid}`
        }
    },
    mixins: [imageLoader],
    computed: {
        thumbnail() {
            return {
                'background-image': `url(${this.blok.thumbnail})`
            }
        }
    }
}
</script>



<style lang="stylus">

.post
    display inline-block
    vertical-align top
    margin 0 2.4rem
    vertical-align top
    transition background-color 250ms ease-in-out, box-shadow 250ms ease-in-out
    font-family: 'Source Sans Pro', sans-serif

.post__body
    width 50vh
    white-space pre-wrap
    p
        font-size .9rem
        color alpha(#000, .65)

    &:hover
        background-color #f9f9f9
        box-shadow 0 0 0 2em @background-color
        h3
            text-decoration underline
.post__image
    height 30vh
    background-size cover
    background-position center
    background-repeat no-repeat


</style>
