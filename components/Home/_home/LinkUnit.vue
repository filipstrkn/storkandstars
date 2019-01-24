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
    font-size 1rem

    &:hover
        .line
            height 1rem

#Text
    display block
    position relative
    font-size 1.3rem
    font-weight 400
    line-height 1
    z-index 1

.line
    position absolute
    bottom -.3em
    left 0
    width 100%
    height 1px
    background-color rgba(0,0,0, 0.1)
    transition all 650ms $ease-in
    z-index 0

</style>
