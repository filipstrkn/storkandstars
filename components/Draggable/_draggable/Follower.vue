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

@import '~assets/stylus/variables'

$duration = 200ms
$arrow = 5px


#Follower.isClickable
    width 50px
    height @width
    // background none
    // border solid 2px $purple
    // border solid 2px $blue
    background-color alpha($blue, .3)

#Follower
    position fixed
    z-index 1000
    width 1.6rem
    width 2rem
    width 6px
    height @width
    border-radius 100%
    // background #935BF9
    background $blue
    transition width $duration ease-out, height $duration ease-out, border $duration ease-out, background $duration ease-out
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
        border-color alpha($black, 0) $black alpha($black, 0) alpha($black, 0)
    &::after
        right -2em
        border-width $arrow 0 $arrow $arrow
        border-color alpha($black, 0) alpha($black, 0) alpha($black, 0) $black


</style>


