<template>
    <main id="Page" @mousemove="followThatMouse">

        <header-block></header-block>

        <draggable>
            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                :blok="blok"
                :is="blok.component">
            </component>
        </draggable>
    </main>
</template>



<script>

import HeaderBlock from './HeaderBlock'
import Draggable from './Draggable'

export default {
    name: 'Page',
    props: ['blok'],

    components: {
        'header-block' : HeaderBlock,
        'draggable': Draggable
    },
    methods: {
        followThatMouse(e) {
            const left = e.clientX || e.pageX
            const top = e.clientY || e.pageY
            const clickable = e.target.classList.contains('_clickable') ? true : false
            this.$store.commit('setFollower', { clickable, position: {top, left} })
        }
        // follow({ commit }, e) {
        //             const left = e.clientX || e.pageX
        //             const top = e.clientY || e.pageY
        //             const clickable = e.target.classList.contains('_clickable') ? true : false
        //             commit('setFollower', { clickable, position: {top, left} })
        //         },
    }
}
</script>



<style lang="stylus">

#Page
    min-height 100vh
    display flex
    flex-direction column

    & > *
        flex-grow 1
        flex-shrink 0



</style>

