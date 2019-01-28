<template>
    <p :class="{'show': launcher}" :style="delay" class="_text--large">{{ word }}</p>
</template>


<script>
export default {
    name: 'WordBlock',
    props: ['word', 'duration', 'launcher'],
    computed: {
        delay() {
            return {
                animationDelay: this.getRandom(this.duration.min, this.duration.max) + 'ms'
            }
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
}
</script>




<style lang="stylus" scoped>

@keyframes showUp
    0%
        opacity 0
        transform translate(-1em, 1.4em) perspective(750px) rotateX(-10deg) rotateY(-30deg) rotateZ(8deg)



    100%
        opacity 1
        transform translate(0, 0) perspective(1000px) rotateX(0) rotateY(0) rotateZ(0)

p
    display inline-block
    height 1.3em
    position relative
    opacity 0
    transform translate(-1em, 1.4em) perspective(750px) rotateX(-10deg) rotateY(-30deg) rotateZ(8deg)
    perspective 1000px
    perspective-origin 50% 50%
    transform-origin 0 100%

    &.show
        animation showUp 1.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards

</style>
