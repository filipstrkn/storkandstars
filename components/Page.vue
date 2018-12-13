<template>
    <main id="Page" :class="`page--${mode}`">
        <header-block />

        <main id="Content">
            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                :blok="blok"
                :is="blok.component">
            </component>
        </main>

        <!-- <span class="runner">0{{ process }}</span> -->

        <!-- <side-link v-if="blok.sidelink_name" :link="{name: blok.sidelink_name, to: blok.sidelink_to}" /> -->
    </main>
</template>



<script>

import HeaderBlock from '~/components/HeaderBlock'
import SideLink from '~/components/Home/_home/SideLink'

export default {
    name: 'Page',
    props: ['blok'],

    components: {
        'header-block': HeaderBlock,
        'side-link': SideLink
    },

    computed: {
        mode() {
            return this.$store.state.theme.dark_mode ? 'dark' : 'light'
        },
        process() {
            return this.$store.state.process
        }
    },

    created() {
        this.$store.commit('setMode', this.blok.dark)
    },

    mounted() {
        this.$store.commit('setScrollbar', this.$el.querySelector('#Content'))
        const { scroll } = this.$store.state
        // const currentPos =

        function name() {

        }

        scroll.addListener((status) => {
            // status
            // console.log(status.offset)
            // console.log(scroll.wheelEventTarget)
        })
    },
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

// #Page
//     background-color #0d0d0d
//     color white
    // height 100vh
    // width 100vw
    // overflow hidden
//     // min-height 100vh
//     // display flex
//     // flex-direction column

//     & > *
//         flex-grow 1
//         flex-shrink 0

#Content
    height 100vh
    width 100vw

.page--light
    #logo
        fill: black
    #Burger
        &::before, &::after
            background-color black !important
.page--dark
    background-color $dark
    color $white
    #logo
        fill: $white
    #Burger
        &::before, &::after
            background-color $white !important



.runner
    position fixed
    font-size 10rem
    font-weight 600
    color alpha(#000, .05)
    bottom -5%
    left 0
    font-family $secondary-font


.scrollbar-track-y
    display none !important

</style>

