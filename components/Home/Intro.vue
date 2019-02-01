<template>
    <section id="Intro">

        <div class="_content">
            <div class="intro__content _text--large">
                <title-block id="IntroTitle" :title="blok.text" :duration="{min: 0, max: 600}" :launcher="true" />
            </div>

            <div class="intro__text lu">
                <p>At Rally, we believe that we can't do our best work without a chance to recharge occasionally. A few times a year, we need to step away from our desks.</p>
            </div>

        </div>


    </section>

</template>



<script>

import TitleBlock from './_home/TitleBlock'
import LinkUnit from './_home/LinkUnit'

export default {
    name: 'Intro',
    components: {
        'title-block': TitleBlock,
        'link-unit': LinkUnit
    },
    props: ['blok']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'



.intro__text
    margin-top $spacing-flex
    font-family $font
    p
        max-width 18em
        font-size 1.2em
        line-height 1.4
        // margin-bottom 4em





#Intro
    padding calc(4em + 16vh) 0
    // border-bottom solid 1px $line

// .intro__content
//     max-width 14em
//     max-width 8em
//     margin 0 0 0 auto

// // #IntroTitle
// //     margin-bottom .2em

.lu
    opacity 0
    transform translateY(2em)
    animation fade 800ms ease-out forwards 1000ms

@keyframes fade
    0%
        opacity 0
        transform translateY(2em)
    100%
        opacity 1
        transform translateY(0)

</style>
