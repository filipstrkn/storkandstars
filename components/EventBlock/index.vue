<template>
    <nuxt-link class="EventUnit" :to="event.link.cached_url" :class="{'show': launcher}">
        <article class="event-unit _clickable" :style="delay">
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

// Components
import LinkUnit from '~/components/Home/_home/LinkUnit'
import DateBlock from './_event/DateBlock'

export default {
    name: 'EventBlock',
    props: ['event', 'index', 'launcher'],
    components: {
        'link-unit': LinkUnit,
        'date-block': DateBlock
    },
    computed: {
        delay() {
            return {
                transitionDelay: (200 * this.index) + 'ms'
            }
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'


.EventUnit
    &.show
        .event-unit
            opacity 1
            &::after
                width 100%

.event-unit
    position relative
    margin 0 0 1em 0
    padding 2em 0
    transition opacity 1s ease-out
    opacity 0

    &::after
        content ""
        position absolute
        bottom 0
        right 0
        width 0
        height 1px
        background-color alpha(#000, .1)
        transition width 1.2s ease-out
        transition-delay inherit


    &:hover::after
        background-color $black

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


</style>
