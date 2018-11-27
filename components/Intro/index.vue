<template>


    <!-- //////////////////////////////////////////////////////////////////////
        Intro text
    /////////////////////////////////////////////////////////////////////// -->
    <section class="intro" :style="size">
        <h1 class="title" :class="{'isGone': isGone}">
            {{ blok.title }}
        </h1>
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
    .title
        padding 0 .1em
        position relative
        font-style: normal
        font-weight 900
        transition color 200ms ease-out
        color $black
        z-index 1

        &.isGone
            color $grey--lighter


</style>


