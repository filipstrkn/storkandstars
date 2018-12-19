<template>
    <nuxt-link :to="to" class="_link">
        <svg viewBox="0 0 16 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M0,2.543l2.543,-2.543l12.915,12.915l-12.915,12.916l-2.543,-2.543l10.373,-10.373l-10.373,-10.372Z"/></svg>

        <p class="_clickable">
            <slot />
        </p>


    </nuxt-link>
</template>


<script>
export default {
    name: 'LinkUnit',
    props: ['to']
}
</script>



<style lang="stylus">


@import '~assets/stylus/variables'


._link
    position relative
    font-size 1rem
    width 1em
    height @width
    font-weight 600
    font-family $secondary-font

    & > *
        display inline-block
        vertical-align middle

    p
        padding-left 1em
        transition padding-left 250ms ease-out
        &:hover
            padding-left 1.6em

    svg
        width .6rem
        height @width
        display inline-block
        vertical-align middle
        fill alpha($black, .4)
        pointer-events none

</style>


