<template>
    <section id="TextBlock">



        <div class="text-block__content _content">

            <title-block :title="blok.text" :duration="{min: 0, max: 600}" />
            <link-unit v-if="blok.link_name" :to="blok.link_to.cached_url">
                {{ blok.link_name }}
            </link-unit>

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

    p
        max-width 13em
        margin-bottom 1em
        // font-weight 600
        // font-family $secondary-font


</style>
