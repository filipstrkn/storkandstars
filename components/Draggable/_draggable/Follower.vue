<template>
    <span id="Follower" :style="position" :class="{'isClickable' : clickable}"></span>
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
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables';

$duration = 200ms

#Follower
    position fixed
    z-index 1000
    width 1.6rem
    height @width
    border-radius 100%
    border solid 1px alpha($white, .1)
    background-color alpha($white, .05)
    transition width $duration ease-out, height $duration ease-out
    transform translate(-50%, -50%)
    pointer-events none

    &.isClickable
        width 2.8rem
        height @width

</style>


