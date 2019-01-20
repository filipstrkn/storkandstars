<template>
    <section id="EventList">



        <!-- //////////////////////////////////////////////////////////////////
            Event list
        /////////////////////////////////////////////////////////////////// -->
        <div class="events" data-visible="false">
            <masonry
                :columnClass="['events__column']"
                :cols="2"
                :gutter="{
                    default: '7em',
                    800: 40
                }">

                <!-- Events -->
                <event-block v-for="event in events" :event="event" :key="event._uid" />


                <!-- IF NOT HAS EVENTS -->
                <!--
                    HERE !!!
                -->
            </masonry>
        </div>



    </section>
</template>



<script>

import EventBlock from '~/components/EventBlock'

export default {
    name: 'EventList',
    props: ['blok'],
    components: {
        'event-block': EventBlock
    },
    computed: {
        events() {
            if (this.blok.only_recent) return this.$store.getters.recentEvents
            return this.$store.state.events
        }

    },
    created() {
        this.$store.dispatch('getEvents')
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

#EventList
    display flex
    justify-content center


.events
    flex-grow 1
    flex-shrink  1
    width 100%
    max-width 80em
    padding 5% 4em 10% 0
    box-sizing border-box

    .event-unit
        margin-top 30%
        min-width 350px



    .events__column:nth-child(odd)
        .event-unit:first-of-type
            margin-top -15%


</style>


