<template>
    <nuxt-link :to="to" id="Button" class="_button _clickable">
        <span id="Text">
            <slot />
        </span>
        <span class="line"></span>
    </nuxt-link>
</template>


<script>
export default {
    name: 'LinkUnit',
    props: ['to', 'line'],
    computed: {
        // lineColor()
    }
}
</script>


<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#Button
    position relative
    display inline-block

    *
        pointer-events none

    &:hover
        .line
            height 1em

#Text
    font-size 1.4em
    position relative
    z-index 1

.line
    position absolute
    bottom 0
    left 0
    width 100%
    height 1px
    background-color $line
    transition all 250ms ease-in-out
    z-index 0

</style>
