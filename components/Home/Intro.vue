<template>
    <section id="Intro">

        <div class="_content">
            <div class="intro__content">
                <title-block id="IntroTitle" :title="blok.text" :duration="{min: 200, max: 1200}" />
                <link-unit :to="'/contact'">
                    Napiš nám
                </link-unit>
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
    padding 20em 0 0 0

.intro__content
    max-width 36em
    margin 0 0 0 auto


</style>
