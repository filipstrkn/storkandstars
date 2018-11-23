<template>
    <div id="Burger" :class="menu" class="_clickable"></div>
</template>



<script>
export default {
    name: 'burger',
    data() {
        return {
            is_menu: false
        }
    },
    computed: {
        menu() {
            return this.is_menu ? 'opened' : 'closed'
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '../../../assets/stylus/variables'

#Burger
    position relative
    width 22px
    height 8px
    cursor pointer
    &.opened::before,
    &.closed::after
        transform-origin 50% 50%
        transition top 250ms ease-in-out, bottom 250ms ease-in-out, transform 250ms ease-in-out 250ms

#Burger.closed
    &::before,
    &::after
        content ""
        display block
        position absolute
        height 2px
        width 100%
        left 0
        // background-color $black
        background-color $white

    &::before
        top 0

    &::after
        bottom 0

#Burger.opened
    &::before,
    &::after
        content ""
        display block
        position absolute
        height 2px
        width 100%
        left 50%
        top 50%
        background-color $black

    &::before
        transform translate(-50%, -50%) rotate(45deg)

    &::after
        transform translate(-50%, -50%) rotate(-45deg)

</style>


