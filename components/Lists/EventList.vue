<template>
    <section id="EventList">



        <!-- //////////////////////////////////////////////////////////////////
            Event list
        /////////////////////////////////////////////////////////////////// -->
        <div class="events" data-visible="false">
            <event-block
                v-for="(event, index) in events"
                :key="event._uid + index"
                :event="event"
                :index="index"
                :launcher="visibleShown"
                 />
        </div>



    </section>
</template>



<script>

// mixins
import isVisible from '~/mixins/isVisible'
// components
import EventBlock from '~/components/EventBlock'


export default {
    name: 'EventList',
    props: ['blok'],
    mixins: [isVisible],
    components: {
        'event-block': EventBlock
    },
    data() {
        return {
            visibleOnce: true
        }
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



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#EventList
    .events
        padding-left 40%

</style>


