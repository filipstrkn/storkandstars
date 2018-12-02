<template>


    <!-- //////////////////////////////////////////////////////////////////////
        Intro text
    /////////////////////////////////////////////////////////////////////// -->
    <section class="intro">
        <h1 class="brand">
            {{ blok.brand }}
        </h1>

        <h3 class="title">{{ blok.title }}</h3>

    </section>
</template>



<script>


export default {
    name: 'Intro',
    props: ['blok'],



    // ========================================================================
    // Computed Propertiees
    // ========================================================================
    computed: {



        // --------------------------------------------------------------------
        //  When scroll hide the ttitle
        // --------------------------------------------------------------------
        //
        isGone() {
            return this.$store.state.scrolls.scrollPosition > 300
        },



        // --------------------------------------------------------------------
        //  Get the size from CMS
        // --------------------------------------------------------------------
        //
        size() {
            const { size } = this.blok
            return {
                'font-size': size + 'vw'
            }
        }



    }
}
</script>



<style lang="stylus">


@import '~assets/stylus/variables'


.intro
    display flex
    align-items center
    box-sizing border-box
    position relative
    width 60vw
    max-width 75em
    justify-content center
    .brand
        padding 0 .1em
        position absolute
        margin 0
        top 50%
        left 0
        transform translate(-30%, -50%)
        font-style: normal
        font-weight 900
        font-size 24vw
        transition color 200ms ease-out
        color alpha($black, .03)
        z-index 0

    .title
        font-weight 300
        font-size calc(1rem + 5 * (100vw / 400))
        // font-family $secondary-font
        margin 0
        max-width 16em
        width 80%
        line-height 1.8em
        white-space pre-wrap


</style>


