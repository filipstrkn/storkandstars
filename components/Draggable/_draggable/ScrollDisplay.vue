<template>
    <transition name="fade">



        <!-- //////////////////////////////////////////////////////////////////
            Scroll Progress Bar
        /////////////////////////////////////////////////////////////////// -->
        <div id="Scroller">
            <span :style="progress"></span>
        </div>



    </transition>
</template>


<script>
export default {


    name: 'ScrollDisplay',


    // ========================================================================
    // Computed Properties
    // ========================================================================
    computed: {


        // --------------------------------------------------------------------
        //  Progress Status
        // --------------------------------------------------------------------
        //
        // Setting the progress into percentage
        //
        //
        progress () {
            return {
                'left': this.$store.state.scrolls.progress + '%'
            }
        }



    },


}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


#Scroller
    position fixed
    bottom 5%
    left 50%
    transform translateX(-50%)
    width 70%
    height 1rem
    pointer-events none
    overflow hidden

    &::before
        content ""
        position absolute
        top 0
        left 0
        width 100%
        height 2px
        background-color $grey--light

    span
        position absolute
        top 0
        left 0
        height 2px
        width 12%
        max-width 10rem
        min-width 2rem
        transform translateX(-50%)
        // background $black
        background linear-gradient(to left, #00000000 0%,#000000 50%,#00000000 100%)
        transition left 450ms ease-out



</style>


