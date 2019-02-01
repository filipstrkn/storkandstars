<template>
    <nav id="NavigationBlock" @mousemove="launchFollower">


        <!-- Navigation -->
        <div
            class="navigation-panel"
            :class="{ 'navigation-panel--dark': $store.state.theme.dark }">
            <logo class="logo" />
            <burger class="burger" />
        </div>

        <!-- Menu -->
        <menu-block />

        <!-- Follower -->
        <follower/>


    </nav>
</template>



<script>


import Logo from '~/components/Logo'
import Burger from './_navigation/Burger'
import MenuBlock from './_navigation/MenuBlock'
import Follower from "./_navigation/Follower"


export default {
    name: 'NavigationBlock',
    components: {
        'follower': Follower,
        'logo': Logo,
        'burger': Burger,
        'menu-block': MenuBlock
    },
    methods: {
        launchFollower(e) {
            const left = e.clientX || e.pageX;
            const top = e.clientY || e.pageY;
            const clickable = e.target.classList.contains("_clickable") ? true : false

            this.$store.commit("setFollower", {
                clickable,
                position: { top: top, left }
            });

        }
    }

}
</script>



<style lang="stylus" scoped>

.navigation-panel
    position fixed
    top 0
    left 0
    width 6em
    height 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
    background-color #fff
    z-index 101
    transition background-color .6s ease


.logo
    position absolute !important
    top 0
    left 0


.navigation-panel--dark
    background-color #0d0d0d


@media screen and (max-width: 760px)
    .navigation-panel
        width 100%
        height 6em
        flex-direction row
        justify-content flex-end
        padding 0 2em
        pointer-events none
        background none
        & > *
            pointer-events all


</style>


