<template>
    <section id="Special">
        <div class="_container--thumb special__container" v-editable="blok">



            <!-- //////////////////////////////////////////////////////////////
                Link
            /////////////////////////////////////////////////////////////// -->
            <nuxt-link :to="blok.link_to.cached_url" class="_link--underlined text _clickable" @mousedown="block" draggable="false">
                {{ blok.title }}
            </nuxt-link>



            <!-- //////////////////////////////////////////////////////////////
                Thumnail
            /////////////////////////////////////////////////////////////// -->
            <image-loader
                class="_thumbnail thumbnail--special"
                :image="blok.attachment">
            </image-loader>



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



    },


    methods: {
        block(e) {
            console.log()
            e.preventDefault()
            return false
        }
    }



}
</script>



<style lang="stylus">


#Special
    padding-right 4em
    padding-left 16em
    box-sizing border-box


    .text
        position absolute
        top 50%
        left 0
        transform translate(-50%, -50%)



</style>


