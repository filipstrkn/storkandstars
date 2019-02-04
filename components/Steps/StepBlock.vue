<template>
    <section class="step-block__container _content">

        <div id="StepBlock"  :class="`step-block--${blok.position}`" v-editable="blok" data-visible="false">
            <div class="step-block__title">
                <span class="index">0{{ blok.index }}</span>
                <h3>{{ blok.title }}</h3>
            </div>

            <p class="_paragraph">{{ blok.text }}</p>
        </div>

    </section>

</template>



<script>

import isVisible from '~/mixins/isVisible'

export default {
    name: 'StepBlock',
    mixins: [isVisible],
    props: ['blok'],
    data() {
        return {
            visibleOnce: true
        }
    }
}
</script>




<style lang="stylus" scoped>

@import '~assets/stylus/variables'

.step-block__container
    margin $spacing-flex auto
    @media screen and (max-width: 500px)
        margin $spacing-flex-mb auto
        padding-left 4em

#StepBlock
    max-width 28em

    p
        margin 0 0 0 auto
        opacity 0
        transform translateY(2em)




.step-block__title
    flex-grow 1
    flex-shrink 0
    display flex
    align-items flex-start
    margin-right 2em
    margin-bottom 2em
    position relative
    opacity 0
    transform translateY(2em)
    h3
        font-weight 400
        font-size calc(.00848 * 100vw + 2rem)
    span
        font-size 1rem
        top .5em
        left -2em
        position absolute

.step-block--left
    margin 0

.step-block--right
    margin 0 0 0 auto



[data-visible="false"]
    opacity 0

[data-visible="true"]
    .step-block__title
        animation raise .4s ease-out forwards

    p
        animation raise .4s ease-out forwards .4s



@keyframes raise
    0%
        opacity 0
        transform translateY(2em)
    100%
        opacity 1
        transform translateY(0)

</style>
