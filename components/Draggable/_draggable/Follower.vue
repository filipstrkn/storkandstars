<template>
    <span id="Follower" :style="position" :class="{'isClickable' : clickable, 'isMoving' : moving, 'isDown' : click}"></span>
</template>


<script>
export default {
    name: 'Follower',
    computed: {
        position() {
            // const { top, left } = this.$store.state.follower.position
            return {
                'top': this.$store.state.follower.position.top + 'px',
                'left': this.$store.state.follower.position.left + 'px'
            }
        },
        clickable() {
            return this.$store.state.follower.clickable
        },
        moving() {
            return this.$store.state.scrolls.walking
        },
        click() {
            return this.$store.state.scrolls.current.isDown
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables';
@import '~assets/stylus/mixins';

$duration = 200ms
$arrow = 5px


#Follower.isDown
    width 1rem
    height @width
    &::before,
    &::after
        opacity 1
    &::before
        left -1em
    &::after
        right -1em

// #Follower.isMoving

    // &::before,
    // &::after
    //     opacity 1
    // &::before
    //     left -1em
    // &::after
    //     right -1em


#Follower
    position fixed
    z-index 1000
    width 1.6rem
    height @width
    border-radius 100%
    border solid 1px alpha($black, .1)
    // background-color alpha($black, .05)
    transition width $duration ease-out, height $duration ease-out, border $duration ease-out
    transform translate(-50%, -50%)
    pointer-events none


    &::before,
    &::after
        content ""
        position absolute
        top 50%
        transform translateY(-50%)
        width 0
        height @width
        border-style solid
        opacity 0
        transition all 400ms ease-in-out
    &::before
        left -2em
        border-width $arrow $arrow $arrow 0
        border-color alpha($black, 0) alpha($black, .6) alpha($black, 0) alpha($black, 0)
    &::after
        right -2em
        border-width $arrow 0 $arrow $arrow
        border-color alpha($black, 0) alpha($black, 0) alpha($black, 0) alpha($black, .6)


    &.isClickable
        width 2.8rem
        height @width
        background-color none
        border solid 2px $black

        &.isDown
            width 2em
            height @width

            &::before,
            &::after
                opacity 0



</style>


