<template>
    <div id="LoadingBlock">

        <span
            v-for="(color, index) of colors"
            :key="index"
            :style="{backgroundColor: color, animationDelay: `${100 * index}ms`}"></span>

    </div>
</template>



<script>
export default {
    name: 'LoadingBlock',
    computed: {
        colors() {
            const uniqueColors = [...new Set(this.$store.state.theme.pallete)]
            return uniqueColors.slice(0, 4)
        }
    }
}
</script>


<style lang="stylus" scoped>

#LoadingBlock
    display flex
    justify-content space-between
    align-items center

    span
        flex-shrink 0
        width .7em
        height @width
        margin 0
        border-radius 100%
        background-color alpha(#000, .1)
        animation bouncing 450ms linear infinite


@keyframes bouncing
    0%
        transform translateY(0)

    50%
        transform translateY(1em)
    100%
        transform translateY(0)

</style>
