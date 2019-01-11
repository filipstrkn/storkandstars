<template>
    <div id="Burger" class="_clickable" @click="toggleMenu">
        <div class="burger__body" :class="menu"></div>
    </div>
</template>



<script>
export default {
    name: 'burger',
    computed: {
        menu() {
            return this.$store.state.menu ? 'opened' : 'closed'
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#Burger
    width 26px
    height @width
    display flex
    justify-content center
    align-items center


.burger__body
    position relative
    width 22px
    height 8px
    cursor pointer
    pointer-events none


.burger__body.closed
    &::before,
    &::after
        content ""
        display block
        position absolute
        height 2px
        width 100%
        left 50%
        transform translateX(-50%)
        background-color $black
        transition transform 100ms ease-out, top 250ms ease-out 250ms

    &::before
        top 0

    &::after
        bottom 0


.burger__body.opened
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
        transition top 100ms ease-out, transform 250ms ease-out 250ms

    &::before
        transform translate(-50%, -50%) rotate(45deg)

    &::after
        transform translate(-50%, -50%) rotate(-45deg)

</style>


