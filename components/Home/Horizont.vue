<template>

    <section id="Projects">
        <draggable>

            <div class="project__intro _text--medium" v-if="blok.title">
                <p>{{ blok.title }}</p>
                <span class="director"></span>
            </div>

            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                :blok="blok"
                :is="blok.component">
            </component>

        </draggable>

    </section>

</template>



<script>

import Draggable from '~/components/Draggable'

export default {
    name: 'Horizont',
    props: ['blok'],
    components: {
        'draggable': Draggable
    }
}
</script>



<style lang="stylus">


.project__intro
    // font-size 2rem
    margin-left 10%
    padding 0 2rem
    max-width 24em
    white-space pre-wrap
    margin-right 10%


.director
    position relative
    display block
    height 1px
    width 6rem
    background-color black
    &::after,
    &::before
        content ""
        position absolute
        right 0
        height 1px
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


</style>


