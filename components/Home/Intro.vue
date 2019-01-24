<template>
    <section id="Intro">

        <div class="_content">
            <title-block id="IntroTitle" :title="blok.text" :duration="{min: 400, max: 3000}" />
            <div>link</div>
        </div>


    </section>
</template>



<script>

import TitleBlock from './_home/TitleBlock'

export default {
    name: 'Intro',
    components: {
        'title-block': TitleBlock
    },
    props: ['blok'],
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'
@import '~assets/stylus/animations'



// #IntroTitle
//     font-size calc(.01212*100vw + 1rem)
#Intro
    padding 20em 0 0 0
    margin 0 0 0 auto
    display block

#IntroTitle
    max-width 36em

    // min-height 100vh
    // display flex
    // align-items flex-end

// #Box
//     // width 100%
//     // padding-bottom 2em
//     padding-top 30vh

// .text
// #Box
//     font-size calc(1rem + 46 * ((100vw - 320px) / 680))
//     font-size calc(1rem + 16 * ((100vw - 320px) / 680))
//     // font-weight 900
//     font-weight 600
//     // max-width 46%
//     // margin-left 15%
//     // line-height 1
//     font-family $secondary-font
//     // z-index 1
//     // position relative



</style>
