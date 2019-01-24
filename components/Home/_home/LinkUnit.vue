<template>
    <nuxt-link
            :to="to"
            id="Button"
            class="_button">

        <div
            @mouseover="setRandomColor"
            @mouseleave="resetRandomColor">
            <span id="Text" class="_clickable">
                <slot />
            </span>
            <span :style="bgColor" class="line"></span>
        </div>

    </nuxt-link>
</template>


<script>

import randomColor from '~/mixins/randomColor'

export default {
    name: 'LinkUnit',
    props: ['to', 'line'],
    mixins: [randomColor],
    data() {
        return {
            randomColorData: {
                initialRandomColor: 'rgba(0,0,0, 0.1)',
                staticRandomColor: this.line
            }
        }
    },
    computed: {
        bgColor() {
            return {
                backgroundColor: this.randomColor
            }
        }
    }
}
</script>


<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#Button
    position relative
    display inline-block

    &:hover
        .line
            height 1em

#Text
    font-size 1.3rem
    font-weight 400
    position relative
    z-index 1

.line
    position absolute
    bottom 0
    left 0
    width 100%
    height 1px
    background-color rgba(0,0,0, 0.1)
    transition all 450ms $ease-in
    z-index 0

</style>
