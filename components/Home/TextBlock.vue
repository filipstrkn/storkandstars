<template>
    <section id="TextBlock">



        <div class="text-block__content _content">

            <title-block :title="blok.text" :duration="{min: 0, max: 600}" />
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
    background-color #fafafa
    background-color #fff

    p

        // font-weight 600
        margin-top 3em
        // font-size 2em
        font-family $font
        line-height 1.4


</style>
