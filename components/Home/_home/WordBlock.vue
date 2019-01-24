<template>
    <p class="_text--large">
        <span @mouseover="setRandomColor" @mouseleave="resetRandomColor" :style="{color: this.randomColor}" :class="{'start-the-show': launcher}">{{ word }} </span>
    </p>
</template>


<script>

import randomColor from '~/mixins/randomColor'

export default {
    name: 'WordBlock',
    props: ['word', 'duration'],
    mixins: [randomColor],
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
        height 0px
        overflow-y hidden

    100%
        height 100%
        overflow-y auto

p
    display inline-block
    height 1.3em
    position relative


.start-the-show
    animation showUp .8s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards

span
    display inline-block
    height 0
    bottom 0
    overflow-y hidden
    transition color 250ms ease-in-out


</style>
