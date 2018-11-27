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

    &::before
        content ""
        position absolute
        top 0
        left 0
        width 100%
        height 1px
        background-color $grey--light

    span
        position absolute
        top 0
        left 0
        width .6rem
        height @width
        border-radius 100%
        transform translateY(-50%)

        background-color $grey--light - 25
        transition left 600ms ease-out



</style>


