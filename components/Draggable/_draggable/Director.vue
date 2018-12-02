<template>



    <!-- //////////////////////////////////////////////////////////////////////
        Director
    /////////////////////////////////////////////////////////////////////// -->
    <section id="Director" v-show="isShown"></section>



</template>



<script>
export default {
    name: 'Director',



    // ========================================================================
    // Computed Properties
    // ========================================================================
    computed: {



        // --------------------------------------------------------------------
        //  Show Arrow when
        // --------------------------------------------------------------------
        //
        // Seeting a rule when arrow should be visible
        //
        //
        isShown() {
            return this.$store.state.scrolls.progress < 20 && !this.$store.state.scrolls.walking ? true : false
        }



    }



}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


#Director
    position fixed
    right 5%
    bottom 5%
    height 2px
    width 3rem
    margin-bottom calc(1rem - 1px)
    background-color $black

    &::after,
    &::before
        content ""
        position absolute
        right 0
        height 2px
        background-color #000
        width .5rem

    &::before
        transform rotate(135deg) translateX(100%)
        transform-origin right
        right 0

    &::after
        right -.5rem
        transform rotate(45deg) translateX(-100%)
        transform-origin left

    &.hidden
        transform translateX(100%)
        opacity 0


</style>


