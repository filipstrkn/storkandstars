<template>
    <span
        id="Follower"
        :style="position"
        :class="{
            'isClickable' : clickable,
            'follower--dark': $store.state.theme.dark,
        }"></span>
</template>


<script>
export default {
    name: 'Follower',
    computed: {
        position() {
            return {
                'top': this.$store.state.follower.position.top + 'px',
                'left': this.$store.state.follower.position.left + 'px'
            }
        },
        clickable() {
            return this.$store.state.follower.clickable
        }
    }

}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

$duration = 200ms

#Follower.isClickable
    width 46px
    height @width

#Follower
    position fixed
    z-index 1000
    width 0
    height @width
    border-radius 100%
    background-color alpha($black, .1)
    transition width $duration ease-out, height $duration ease-out
    transform translate(-50%, -50%)
    pointer-events none


    &.follower--dark
        background-color alpha($white, .1)

@media screen and (max-width: 760px)
    #Follower
        display none

</style>


