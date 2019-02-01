<template>
    <nuxt-link class="EventUnit" :to="event.link.cached_url" :class="{'show': launcher}">
        <article class="event-unit" :style="delay">
            <div class="event-unit__content">
                <div class="info">
                    <!-- Date -->
                    <date-block :from="event.from" :to="event.to" class="date" />
                    <!-- City -->
                    <span v-if="event.city" class="city">{{ event.city }}</span>
                </div>
            </div>

            <p class="topic">{{ event.topic }}&nbsp;
                <svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M16.401,13.668l-3.5,0l0,-7.987l-10.426,10.426l-2.475,-2.474l10.133,-10.133l-7.4,0l0,-3.5l13.668,0l0,13.668Z" style="fill-rule:nonzero;"/></svg>
                <!-- <span>
                </span> -->
            </p>

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
    padding 2.4em 0
    transition opacity 1s ease-out
    opacity 0
    display flex
    align-items flex-start
    font-size 1.2em

    &::after
        content ""
        position absolute
        bottom 0
        right 0
        width 0
        height 2px
        background-color alpha(#000, .1)
        transition width 1.2s ease-out
        transition-delay inherit

    .topic
        font-family $font
        font-weight 600
        svg
            opacity 0
            width .6em
            height @width

    &:hover
        &::after
            background-color $black

        .topic svg
            opacity 1 !important

    *
        pointer-events none


.info
    flex-grow 0
    flex-shrink 1
    margin-right 2em
    text-align right
    // color alpha(#000, .45)
    font-family $font
    font-size 1rem


.city
    display inline-block
    display block






</style>
