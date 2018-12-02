<template>
    <main id="HorizontalPage" @mousemove="launchFollower">

        <!--
            Header
         -->
        <!-- <header-block></header-block> -->


        <!--
            Draggable Components
         -->
        <draggable>
            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                :blok="blok"
                :is="blok.component">
            </component>
        </draggable>




        <!--
            Cursor's stalker
         -->
        <!-- <follower></follower> -->


    </main>
</template>



<script>

// componets
import HeaderBlock from '~/components/HeaderBlock'
import Draggable from '~/components/Draggable'
import Follower from '~/components/Draggable/_draggable/Follower'



export default {


    name: 'HorizontalPage',


    props: ['blok'],


    components: {
        'header-block' : HeaderBlock,
        'draggable': Draggable,
        'follower': Follower
    },


    methods: {


        launchFollower(e) {
            const left = e.clientX || e.pageX
            const top = e.clientY || e.pageY
            const clickable = e.target.classList.contains('_clickable') ? true : false
            this.$store.commit('setFollower', { clickable, position: {top, left} })
        }


    }
}
</script>



<style lang="stylus">


#HorizontalPage
    min-height 100vh
    display flex
    flex-direction column

    & > *
        flex-grow 1
        flex-shrink 0


</style>

