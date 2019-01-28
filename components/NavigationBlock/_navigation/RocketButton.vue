<template>
    <nuxt-link id="RocketButton" :to="to ? to : '/form/new-project'" :style="bgcolor" class="_clickable">



        <rocket-icon class="rocket-button__rocket" />


        <div class="rocket-button__icon">
            <svg viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M10.99,36.986c0,2.253 1.829,4.082 4.081,4.082c2.253,0 4.082,-1.829 4.082,-4.082l0,-10.99c0,-2.252 -1.829,-4.081 -4.082,-4.081c-2.252,0 -4.081,1.829 -4.081,4.081l0,10.99Zm14.676,-4.093c0.134,-0.013 0.269,-0.02 0.406,-0.02c2.261,0 4.097,1.836 4.097,4.097c0,2.262 -1.836,4.098 -4.097,4.098c-2.261,0 -4.097,-1.836 -4.097,-4.098l0,-4.077l3.691,0Zm-17.492,-7.287c0.013,0.134 0.02,0.269 0.02,0.406c0,2.261 -1.836,4.097 -4.097,4.097c-2.261,0 -4.097,-1.836 -4.097,-4.097c0,-2.261 1.836,-4.097 4.097,-4.097l4.077,0l0,3.691Zm28.812,-3.691c2.253,0 4.082,1.829 4.082,4.081c0,2.253 -1.829,4.082 -4.082,4.082l-10.99,0c-2.252,0 -4.081,-1.829 -4.081,-4.082c0,-2.252 1.829,-4.081 4.081,-4.081l10.99,0Zm-6.908,-17.834c0,-2.252 -1.829,-4.081 -4.082,-4.081c-2.252,0 -4.081,1.829 -4.081,4.081l0,10.99c0,2.253 1.829,4.082 4.081,4.082c2.253,0 4.082,-1.829 4.082,-4.082l0,-10.99Zm-15.007,6.909c2.253,0 4.082,1.829 4.082,4.081c0,2.253 -1.829,4.082 -4.082,4.082l-10.99,0c-2.252,0 -4.081,-1.829 -4.081,-4.082c0,-2.252 1.829,-4.081 4.081,-4.081l10.99,0Zm17.822,4.471c-0.013,-0.133 -0.02,-0.269 -0.02,-0.405c0,-2.262 1.836,-4.097 4.097,-4.097c2.262,0 4.098,1.835 4.098,4.097c0,2.261 -1.836,4.097 -4.098,4.097l-4.077,0l0,-3.692Zm-17.492,-7.287c-0.133,0.013 -0.269,0.02 -0.405,0.02c-2.262,0 -4.097,-1.836 -4.097,-4.097c0,-2.261 1.835,-4.097 4.097,-4.097c2.261,0 4.097,1.836 4.097,4.097l0,4.077l-3.692,0Z"/></svg>
        </div>


    </nuxt-link>
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
    position relative
    display block
    font-weight 500
    width 4.6em
    height @width
    border-radius 100%
    overflow hidden

    *
        pointer-events none

    &:hover
        animation-name: shaking
        animation-duration: 0.8s
        transform-origin:50% 50%
        animation-iteration-count: infinite
        animation-timing-function: linear

        .rocket-button__rocket
            top -100%
            left 150%
            transition all 1s ease-in

        .rocket-button__icon
            opacity 1
            transition opacity 250ms ease-in .4s

.rocket-button__rocket
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    transition all 250ms ease-out

.rocket-button__icon
    position absolute
    width 40%
    height @width
    top 50%
    left 50%
    transform translate(-50%, -50%)
    opacity 0
    transition opacity 100ms ease-in
    svg
        fill $black

</style>
