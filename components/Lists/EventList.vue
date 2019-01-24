<template>
    <section id="EventList">



        <!-- //////////////////////////////////////////////////////////////////
            Event list
        /////////////////////////////////////////////////////////////////// -->
        <div class="events" data-visible="false">
            <event-block v-for="(event, index) in events" :event="event" :key="event._uid + index" />
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

</style>


