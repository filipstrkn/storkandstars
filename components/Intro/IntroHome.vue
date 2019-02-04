<template>
    <section id="Intro">

        <div class="_content">
            <!-- Title -->
            <title-block
                id="IntroTitle"
                :title="'Design sprints & Digital art.'"
                :options="{
                    duration: {min: 0, max: 600},
                    launcher: true,
                    size: 'title'
                }"/>

            <!-- Text -->
            <div class="intro__text lu">
                <p class="_paragraph">{{ blok.text }}</p>
            </div>

        </div>


    </section>

</template>



<script>

import TitleBlock from '~/components/Home/_home/TitleBlock'
import LinkUnit from '~/components/Home/_home/LinkUnit'

export default {
    name: 'IntroHome',
    components: {
        'title-block': TitleBlock,
        'link-unit': LinkUnit
    },
    props: ['blok']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'


#Intro
    padding calc(5em + 16vh) 0 $spacing-flex 0
    @media screen and (max-width: 500px)
        padding-bottom $spacing-flex-mb

#IntroTitle
    max-width 52em

.intro__text
    margin-top $spacing-flex
    opacity 0
    transform translateY(2em)
    animation fade 800ms ease-out forwards 1000ms
    p
        max-width 20em
        font-size 1.2em !important
        // line-height 1.4


@keyframes fade
    0%
        opacity 0
        transform translateY(2em)
    100%
        opacity 1
        transform translateY(0)

</style>
