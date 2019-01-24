<template>
    <section id="Intro">

        <div class="_content">
            <div class="intro__content _text--large">
                <title-block id="IntroTitle" :title="blok.text" :duration="{min: 200, max: 1200}" />
                <link-unit :to="blok.link_to.cached_url">{{ blok.link_name }}</link-unit>
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
    props: ['blok'],
}
</script>



<style lang="stylus" scoped>

#Intro
    padding calc(8em + 20vh) 0 0 0

.intro__content
    max-width 14em
    margin 0 0 0 auto


</style>
