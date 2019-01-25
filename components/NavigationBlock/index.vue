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
    padding 5% 8%
    padding 4em 6.4em
    pointer-events none
    & > *
        pointer-events all


.logo,
.burger
    z-index 100


</style>


