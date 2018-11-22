<template>
    <article class="post">



        <!-- //////////////////////////////////////////////////////////////////////
            Post Loading Placeholder
        ////////////////////////////////////////////////////////////////////// -->
        <post-loading v-if="isLoading"></post-loading>



        <!-- //////////////////////////////////////////////////////////////////////
            Post Body
        ////////////////////////////////////////////////////////////////////// -->
        <div v-else class="post__body">
            <a :href="link">

                <!-- Thumbnail -->
                <post-thumbnail :thumbnail="blok.thumbnail"></post-thumbnail>

                <!-- Text -->
                <div class="post__details">
                    <h3>{{ blok.title }}</h3>
                    <p>{{ blok.description }}</p>
                </div>

            </a>
        </div>

    </article>
</template>



<script>


// mixins
import loadingImage from '~/mixins/loadingImage'
// components
import PostLoading from '~/components/Post/_post/PostLoading'
import PostThumbnail from './_post/PostThumbnail'


export default {



    name: 'Post',



    props: ['blok'],



    mixins: [loadingImage],



    components: {
        'post-loading': PostLoading,
        'post-thumbnail': PostThumbnail
    },



    computed: {



        // --------------------------------------------------------------------
        //  Link to
        // --------------------------------------------------------------------
        //
        // Check if the url is cached. If not use url property
        //
        link() {
            return (
                !this.blok.link_to.cached_url ?
                this.blok.link_to.cached_url  :
                this.blok.link_to.url
            )
        },



        // --------------------------------------------------------------------
        //  Image
        // --------------------------------------------------------------------
        //
        // Image computed property is the start for 'loadingImage' mixin
        //
        image() {
            return this.blok.thumbnail
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
    width 50vh

    .post__body
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
