<template>
    <header id="Header">
        <div class="header__left">
            <logo-square></logo-square>
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
import Burger from './_header/Burger'

export default {
    name: 'HeaderBlock',
    components: {
        'logo': Logo,
        'logo-square': LogoSquare,
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
    padding 2em 2.5em
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


