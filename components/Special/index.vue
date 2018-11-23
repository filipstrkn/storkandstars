<template>
    <section>
        <div id="Special" v-editable="blok">
            <nuxt-link :to="blok.link_to.cached_url">
                <div class="_container--thumb">



                    <!-- //////////////////////////////////////////////////////////
                        Text Elements
                    /////////////////////////////////////////////////////////// -->
                    <div class="text" :style="textColor">
                        <h3>{{ blok.title }}</h3>
                        <p>{{ blok.note }}</p>
                    </div>



                    <!-- //////////////////////////////////////////////////////////
                        Image Loader
                    /////////////////////////////////////////////////////////// -->
                    <image-loader
                        class="_thumbnail"
                        :image="blok.attachment">
                    </image-loader>



                </div>
            </nuxt-link>
        </div>
    </section>
</template>



<script>


/*
|==============================================================================
| Specials
|==============================================================================
|
| What is it?
| ---
| I a components of a special rubrtic or content on the site.
| It loads an image that can be all web supported formats.
| While the image is loading, the 'image-loader' component is show
| until loading finishes.
| ---
| Special components can recieve a custom text color if
| its background not has to many contrast.
|
|*/

import ImageLoader from '~/components/Loaders/ImageLoader'
// import setWidthOfElement from '~/mixins/setWidthOfElement'


export default {



    name: 'Special',



    // ========================================================================
    // Properties
    // ========================================================================
    props: ['blok'],
    // mixins: [setWidthOfElement],



    // ========================================================================
    // Used Components
    // ========================================================================
    components: {
        'image-loader' : ImageLoader
    },



    // ========================================================================
    // Computed Properties
    // ========================================================================
    computed: {



        // --------------------------------------------------------------------
        //  Text Color
        // --------------------------------------------------------------------
        //
        // Detecting a a hex value and validating it using RegEx
        //
        //
        textColor() {
            const reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
            if ( reg.test(this.blok.title_color) ) return {'color' : this.blok.title_color}
            else return {}

        }



    }



}
</script>



<style lang="stylus">

#Special
    display inline-block
    vertical-align top

    .text
        width 90%
        p
            margin 0
            white-space pre-wrap

</style>


