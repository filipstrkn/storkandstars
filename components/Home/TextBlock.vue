<template>
    <section id="TextBlock" :class="{ 'is-intro': blok.is_intro}">



        <div class="text-block__content _content">

            <title-block
                id="IntroTitle"
                :title="blok.text"
                :options="{
                    duration: {min: 0, max: 600},
                    launcher: blok.is_intro || false,
                    size: 'title'
                }"/>
            <p class="_text--medium">{{ blok.subtitle }}</p>

        </div>




    </section>
</template>



<script>

// import isVisible from '~/mixins/isVisible'
import LinkUnit from '~/components/Home/_home/LinkUnit'
import TitleBlock from './_home/TitleBlock'

export default {
    name: 'TextBlock',
    props: ['blok'],
    // mixins: [isVisible],
    components: {
        'title-block': TitleBlock,
        'link-unit': LinkUnit
    }
}

</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'

#TextBlock
    padding $spacing-flex 2em
    background-color #fff
    @media screen and (max-width: 500px)
        padding $spacing-flex-mb 0 $spacing-flex-mb 0
        &.is-intro
            padding 10em 0 $spacing-flex-mb 0


    p

        margin-top 3em
        font-family $font
        line-height 1.4


</style>
