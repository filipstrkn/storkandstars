<template>

    <article class="event-unit">

        <div class="event" data-visible="false">

            <div class="content">

                <div class="info">

                    <date-block :from="event.from" :to="event.to" class="date" />

                    <div v-if="event.city" class="city">
                        <span>{{ event.city }}</span>
                    </div>

                </div>
                <p class="topic">{{ event.topic }}</p>

            </div>

        </div>

        <link-unit :to="event.link.cached_url" class="link">
            Zúčastnit se
        </link-unit>



    </article>

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
    data() {
        return {
            visibleAt: 80
        }
    },
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
    background-color #f6dd86
    max-width 26em
    transform-origin 50% 0
    &:hover
        .event
            transform translateY(-10%)
        .link
            opacity 1
            bottom 10%
            pointer-events all

.link
    position absolute
    display block
    bottom -10%
    opacity 0
    left 50%
    transform translateX(-50%)
    transition all 400ms ease-out
    pointer-events none

.event
    display flex
    flex-direction column
    position relative
    padding 6em 2em
    font-family $secondary-font
    white-space pre-wrap
    color $black
    text-align center
    box-sizing border-box
    color $white
    transition all 400ms ease-out

    .content
        flex-grow 1

    .footer
        text-align right



.info
    display flex
    flex-wrap wrap
    justify-content center
    font-weight 600
    font-style italic
    color $black

.city
    display inline-block

.date
    flex-shrink 0
    display flex
    align-items center
    margin-right .2em

    & .to::before
        content ""
        display inline-block
        vertical-align middle
        height 1px
        width .8em
        margin 0 .3em
        background-color $black


.topic
    line-height 1.3
    font-weight 900
    font-family $secondary-font
    font-size calc(.00848 * 100vw + 18.81818px)
    &::after
        content ""
        display block
        margin 1em auto 0 auto
        width 1.6em
        height .2em
        background-color $white

[data-visible="false"]
    transition all $appear ease-in
    transform translateY(30%)
    opacity 0


[data-visible="true"]
    transition all 600ms ease-out
    transform translateY(0)
    opacity 1

// .eh
//     transform-origin 50% 0
</style>
