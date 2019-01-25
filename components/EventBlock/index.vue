<template>
    <nuxt-link :to="event.link.cached_url">
        <article class="event-unit _clickable">

            <div class="event-unit__content">
                <p class="topic">{{ event.topic }}</p>
                <div class="info">
                    <!-- Date -->
                    <date-block :from="event.from" :to="event.to" class="date" />
                    <!-- City -->
                    <span v-if="event.city" class="city">{{ event.city }}</span>
                </div>
            </div>



        </article>
    </nuxt-link>
</template>



<script>

// Mixin
import isVisible from '~/mixins/isVisible'

// Components
import LinkUnit from '~/components/Home/_home/LinkUnit'
import DateBlock from './_event/DateBlock'

export default {
    name: 'EventBlock',
    props: ['event'],
    mixins: [isVisible],

    components: {
        'link-unit': LinkUnit,
        'date-block': DateBlock
    }
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'

.event-unit
    position relative
    border-bottom solid 1px rgba(0,0,0, 0.1)
    // max-width 60%
    margin 0 0 1em 0
    padding 2em 0
    transition border 250ms ease

    &:hover
        border-color $black

    *
        pointer-events none

.event-unit__content
    max-width 30em
    margin 0 auto 0 0

.info
    display flex
    flex-wrap wrap
    margin-top  .4em
    color alpha(#000, .45)
    font-family $secondary-font


.city
    display inline-block
    &::before
        content ""
        display inline-block
        width 3px
        height @width
        border-radius 100%
        background-color alpha(#000, .45)
        margin 0 .4em
        vertical-align middle



.topic
    font-weight 600
    margin 0
    font-size 1.2em
    font-family $secondary-font


[data-visible="false"]
    transition all $appear ease-in
    transform translateY(30%)
    opacity 0


[data-visible="true"]
    transition all 600ms ease-out
    transform translateY(0)
    opacity 1

</style>
