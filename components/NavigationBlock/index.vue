<template>

    <div id="NavigationBlock">

        <logo class="logo" />
        <burger class="burger" />
        <menu-block />

    </div>


</template>



<script>

import Logo from '~/components/Logo'
import Burger from './_navigation/Burger'
import MenuBlock from './_navigation/MenuBlock'

export default {
    name: 'NavigationBlock',
    components: {
        'logo': Logo,
        'burger': Burger,
        'menu-block': MenuBlock
    }
}
</script>


<style lang="stylus" scoped>

#NavigationBlock
    position fixed
    top 0
    left 0
    width 100%
    z-index 100
    display flex
    justify-content space-between
    align-items center
    // padding 4% 5%
    // padding 5% 6%
    pointer-events none
    & > *
        pointer-events all


    // z-index 98

.logo,
.burger
    position fixed
    top 0
    z-index 100
.logo
    left 0

.burger
    right 3em
    top 2em


</style>


