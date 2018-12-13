<template>
    <header id="Header">
        <div class="header__left">
            <logo-square></logo-square>
            <!-- <nuxt-link :to="'/'">
                <logo-brand></logo-brand>
            </nuxt-link> -->
            <!-- <logo></logo> -->
        </div>
        <div class="header__right">
            <nuxt-link
                v-if="$store.state.sidelink"
                :to="$store.state.sidelink.to"
                class="sidelink _clickable">{{ $store.state.sidelink.name }}</nuxt-link>
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

.sidelink
    padding .4em 1.2em
    background-color alpha(#000, .06)
    border-radius 30em
    font-size .9em
    margin-right 2rem

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


