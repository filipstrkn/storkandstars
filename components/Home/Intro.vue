<template>
    <section id="Intro">

        <div id="Box" class="text">
            <title-block class="title" :title="blok.text" :duration="{min: 400, max: 3000}" />
            <title-block :title="blok.second" :duration="{min: 400, max: 3000}" />
            <!-- <div>link</div> -->
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


#Intro
    min-height 100vh

#Box
    width 100%
    padding-top 35vh

.text
    font-size calc(1rem + 46 * ((100vw - 320px) / 680))
    font-weight 900
    max-width 60%
    margin-left 15%
    // line-height 1
    font-family $secondary-font
    z-index 1
    position relative

    & > *:first-child
        margin-bottom 1.4em

    // p
    //     margin-top 1.4em

    //     span
    //         // opacity 0
    //         position relative
    //         line-height 1
    //         padding 0


// #Intro
//     position relative
//     & > *
//         position relative
//         z-index 1
//     &::after
//         content ""
//         position absolute
//         width 200%
//         height 60%
//         background-color #f8f0f0
//         left 0
//         top 15%
//         z-index 0


</style>
