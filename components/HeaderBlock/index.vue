<template>
    <header id="Header">
        <div class="header__left">
            <nuxt-link :to="'/'">
                <!-- <logo-brand></logo-brand> -->
                <logo-square></logo-square>
            </nuxt-link>
            <!-- <logo-square></logo-square> -->
            <!-- <logo></logo> -->
        </div>
        <div class="header__right">
            <burger></burger>
        </div>
    </header>
</template>


<script>

import Logo from './_header/Logo'
import LogoSquare from './_header/LogoSquare'
import LogoBrand from './_header/LogoBrand'
import Burger from './_header/Burger'

export default {
    name: 'HeaderBlock',
    components: {
        'logo': Logo,
        'logo-square': LogoSquare,
        'logo-brand': LogoBrand,
        'burger': Burger
    }
}
</script>


<style lang="stylus" scoped>

#Header
    position fixed
    display flex
    justify-content center
    align-items center
    top 0
    left 0
    width 100%
    padding 2em 4em
    // padding 1% 3%
    padding 3% 5%
    z-index 99
    pointer-events none

    .header__left,
    .header__right
        display flex
        align-items center
        flex-grow 1
        flex-shrink 0
        height 60px

        & > *
            pointer-events all

    .header__left
        justify-content flex-start
    .header__right
        justify-content flex-end

</style>


