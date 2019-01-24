<template>

    <nuxt-link id="RocketButton" :to="to ? to : '/form/new-project'" :style="bgcolor" class="_clickable">
        <rocket-icon />
    </nuxt-link>
    <!-- <div class="menu__footer">
        <span>Odstartuj svůj projekt</span>
    </div> -->


</template>



<script>

import RocketIcon from './RocketIcon'

export default {
    name: 'RocketButton',
    props: ['to', 'color'],
    components: {
        'rocket-icon': RocketIcon
    },
    computed: {
        bgcolor() {
            if (this.color) {
                return {
                    backgroundColor: this.color
                }
            }
            return
        }
    },
}
</script>



<style lang="stylus" scoped>


@keyframes shaking
    0%
        transform: translate(2px, 1px) rotate(0deg)
    10%
        transform: translate(-1px, -2px) rotate(-1deg)
    20%
        transform: translate(-3px, 0px) rotate(1deg)
    30%
        transform: translate(0px, 2px) rotate(0deg)
    40%
        transform: translate(1px, -1px) rotate(1deg)
    50%
        transform: translate(-1px, 2px) rotate(-1deg)
    60%
        transform: translate(-3px, 1px) rotate(0deg)
    70%
        transform: translate(2px, 1px) rotate(-1deg)
    80%
        transform: translate(-1px, -1px) rotate(1deg)
    90%
        transform: translate(2px, 2px) rotate(0deg)
    100%
        transform: translate(1px, -2px) rotate(-1deg)


#RocketButton
    display flex
    align-items center
    justify-content center
    font-weight 500
    width 4em
    height @width
    border-radius 100%

    *
        pointer-events none

    &:hover
        animation-name: shaking
        animation-duration: 0.8s
        transform-origin:50% 50%
        animation-iteration-count: infinite
        animation-timing-function: linear

        // & ~ span
        //     opacity 1


</style>
