<template>
    <li id="MenuLink" class="menu-link" @click="closeMenu" :class="{'menu-link--dark': $store.state.theme.dark}">
        <nuxt-link :to="to">
            <div class="menu-link__body">
                <h3>{{ title }}</h3>
                <!-- <span>{{ subtitle }}</span> -->
            </div>
        </nuxt-link>
    </li>
</template>



<script>
export default {
    name: 'MenuLink',
    props: ['to', 'title', 'subtitle'],
    methods: {
        closeMenu() {
            this.$store.commit('toggleMenu', false)
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

 #MenuLink
    position relative
    display block
    line-height 1
    margin 1.6em 0 0 0

    .menu-link__body
        pointer-events none
        transition transform 250ms ease-out

    h3
        font-size 1em
        font-weight 600
    span
        display block
        font-weight 400
        font-size 1rem
        margin-top .6em

    &::before
        content ""
        position absolute
        left 0
        height 100%
        width 0
        transition width 250ms ease-out

    &:hover
        position relative

        .menu-link__body
            transform translateX(20px)

        &::before
            width 10px


.menu-link
    &::before
        background-color alpha(#000, .1)


.menu-link--dark
    &::before
        background-color alpha(#fff, .1)
    h3
        color #fff
    span
        color alpha(#fff, .45)


</style>


