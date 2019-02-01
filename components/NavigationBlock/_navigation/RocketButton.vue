<template>
    <a id="RocketButton" :href="link">


        <rocket-icon class="rocket-button__rocket" />


        <div class="rocket-button__icon">
            <svg viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M15.071,10.99c2.253,0 4.082,1.829 4.082,4.081c0,2.253 -1.829,4.082 -4.082,4.082l-10.99,0c-2.252,0 -4.081,-1.829 -4.081,-4.082c0,-2.252 1.829,-4.081 4.081,-4.081l10.99,0Zm0.33,-2.816c-0.133,0.013 -0.269,0.02 -0.405,0.02c-2.262,0 -4.097,-1.836 -4.097,-4.097c0,-2.261 1.835,-4.097 4.097,-4.097c2.261,0 4.097,1.836 4.097,4.097l0,4.077l-3.692,0Z" style="fill:#36c5f0;"/><path d="M10.99,36.986c0,2.253 1.829,4.082 4.081,4.082c2.253,0 4.082,-1.829 4.082,-4.082l0,-10.99c0,-2.252 -1.829,-4.081 -4.082,-4.081c-2.252,0 -4.081,1.829 -4.081,4.081l0,10.99Zm-2.816,-11.38c0.013,0.134 0.02,0.269 0.02,0.406c0,2.261 -1.836,4.097 -4.097,4.097c-2.261,0 -4.097,-1.836 -4.097,-4.097c0,-2.261 1.836,-4.097 4.097,-4.097l4.077,0l0,3.691Z" style="fill:#e01e5a;"/><path d="M25.666,32.893c0.134,-0.013 0.269,-0.02 0.406,-0.02c2.261,0 4.097,1.836 4.097,4.097c0,2.262 -1.836,4.098 -4.097,4.098c-2.261,0 -4.097,-1.836 -4.097,-4.098l0,-4.077l3.691,0Zm11.32,-10.978c2.253,0 4.082,1.829 4.082,4.081c0,2.253 -1.829,4.082 -4.082,4.082l-10.99,0c-2.252,0 -4.081,-1.829 -4.081,-4.082c0,-2.252 1.829,-4.081 4.081,-4.081l10.99,0Z" style="fill:#ecb22e;"/><path d="M30.078,4.081c0,-2.252 -1.829,-4.081 -4.082,-4.081c-2.252,0 -4.081,1.829 -4.081,4.081l0,10.99c0,2.253 1.829,4.082 4.081,4.082c2.253,0 4.082,-1.829 4.082,-4.082l0,-10.99Zm2.815,11.38c-0.013,-0.133 -0.02,-0.269 -0.02,-0.405c0,-2.262 1.836,-4.097 4.097,-4.097c2.262,0 4.098,1.835 4.098,4.097c0,2.261 -1.836,4.097 -4.098,4.097l-4.077,0l0,-3.692Z" style="fill:#2eb67d;"/></g></svg>
        </div>


    </a>
</template>



<script>

import RocketIcon from './RocketIcon'

export default {
    name: 'RocketButton',
    props: ['to'],
    components: {
        'rocket-icon': RocketIcon
    },
    data() {
        return {
            link: 'https://join.slack.com/t/eoeostudio/shared_invite/enQtNTM5MjI4ODc5NjM1LWIzYjQ3NDRmM2FhZWUwYWU2NmM3ODdmNDg5MzJkY2U5MGFjYWEwYTM4YTFhZTJkNThmOTdmOTEyMmYwYWNmMTU'
        }
    }

}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

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
    width 4em
    height @width
    border-radius 100%

    // *
    //     pointer-events none

    &:hover
        animation-name: shaking
        animation-duration: 0.6s
        transform-origin:50% 50%
        animation-timing-function: linear

        .rocket-button__rocket
            top -60%
            left 140%
            transition all .8s ease-in
            opacity 0

        .rocket-button__icon
            opacity 1
            transition opacity 250ms ease-in .45s

.rocket-button__rocket
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    transition all 200ms ease-out

.rocket-button__icon
    position absolute
    width 40%
    height @width
    top 50%
    left 50%
    transform translate(-50%, -50%)
    opacity 0
    // transition opacity 50ms ease-in
    // svg
    //     stroke $black

</style>
