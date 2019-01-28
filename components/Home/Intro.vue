<template>
    <section id="Intro">

        <div class="_content">
            <div class="intro__content _text--large">
                <title-block id="IntroTitle" :title="blok.text" :duration="{min: 0, max: 600}" :launcher="true" />
                <link-unit class="lu" :to="blok.link_to.cached_url">{{ blok.link_name }}</link-unit>
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

#Intro
    padding calc(8em + 20vh) 0 0 0

.intro__content
    max-width 14em
    max-width 8em
    margin 0 0 0 auto

// #IntroTitle
//     margin-bottom .2em

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
