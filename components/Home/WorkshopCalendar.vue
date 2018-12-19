<template>
    <section id="Calendar">
        <draggable>

            <div class="project__intro _text--medium" v-if="blok.title">
                <div>
                    <p>{{ blok.title }}</p>
                    <span class="director"></span>
                </div>
            </div>

            <div class="events" data-visible="false">
                <component
                    :key="blok._uid"
                    v-for="blok in blok.events"
                    :blok="blok"
                    :is="blok.component">
                </component>
            </div>

        </draggable>


    </section>
</template>



<script>

import marked from 'marked'
import Draggable from '~/components/Draggable'
import isVisible from '~/mixins/isVisible'

export default {
    name: 'WorkshopCalendar',
    props: ['blok'],
    mixins: [isVisible],
    components: {
        'draggable': Draggable
    },
    computed: {
        text() {
            return marked(this.blok.description)
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

#Calendar
    width 100%

    .project__intro
        display flex
        align-items center
        margin-left 10%
        padding 0 2rem
        max-width 12em
        width 100%
        white-space pre-wrap
        margin-right 10%


.events
    display flex
    align-items center
    & > *
        margin-right 6em
        &:last-of-type
            margin-right 0

    &[data-visible="false"]
        transition all $appear ease-in
        opacity 0
        transform translateX(6rem)
        .event-unit
            transition margin-right $appear ease-in
            margin-right 12em

    &[data-visible="true"]
        transition all $appear ease-out
        opacity 1
        transform translateX(0)
        .event-unit
            transition margin-right $appear ease-out
            margin-right 6em

.event
    min-width 25em
    min-height 25em
    width 46vh
    height 46vh



</style>


