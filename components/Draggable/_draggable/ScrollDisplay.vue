<template>
    <div id="ScrollDisplay" :style="{width: position}"></div>
</template>


<script>



export default {
    name: 'ScrollDisplay',
    props: ['position']
}
</script>


<style lang="stylus" scoped>

#ScrollDisplay
    position fixed
    bottom 0
    left 0
    height 6px
    width 60%
    background-color #000
    pointer-events none
    z-index 998
    &::after
        content ""
        position fixed
        width 100%
        height 6px
        background-color alpha(#000, .1)
        z-index 997

</style>


