<template>
    <p class="_text--large">
        <span :class="{'start-the-show': launcher}">{{ word }} </span>
    </p>
</template>


<script>
export default {
    name: 'WordBlock',
    props: ['word', 'duration'],
    data() {
        return {
            launcher: false,
            hovered: false,
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.random() * (max - min) + min;
        },
        showWord() {
            this.launcher = true
            this.$el.getElementsByTagName('span')[0].style.animationDelay = this.getRandom(this.duration.min, this.duration.max) + 'ms'
        }
    },
    mounted() {
        this.showWord()
    }
}
</script>




<style lang="stylus" scoped>

@keyframes showUp
    0%
        opacity 0
        height 0px

    100%
        opacity 1
        height 100%

p
    display inline-block
    height 1.3em
    position relative


.start-the-show
    animation showUp 1.2s ease-out forwards

span
    display inline-block
    height 0
    bottom 0
    overflow-y hidden
    transition color 250ms ease-in-out


</style>
