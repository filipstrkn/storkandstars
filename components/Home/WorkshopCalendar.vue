<template>
    <section id="Calendar">

        <ul class="events">
            <li v-for="(event, index) in 5" :key="index" class="event">
                <div class="content">
                    <h4 class="date"><span>26.</span><span>28.</span>11.</h4>
                    <p class="topic">Praha, Mondays, How to interview</p>
                </div>
            </li>
        </ul>


    </section>
</template>



<script>

import marked from 'marked'

export default {
    name: 'WorkshopCalendar',
    props: ['blok'],
    computed: {
        text() {
            return marked(this.blok.description)
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

// .calendar
//     max-width 50em


// .event
//     margin-bottom 2em
//     margin 2em auto
//     white-space nowrap
.date
    // font-size 6em
    position absolute
    top 0
    left 0
    padding 1.6rem
    font-size 1.2em
    font-weight 400
    color #ff5757
    span:last-of-type::before
        content ""
        display inline-block
        vertical-align middle
        height 1px
        width 1em
        margin 0 .2em
        background-color black
        background-color #ff5757
        transition width 250ms ease-in-out
//     .topic
//         font-size 1rem

//     &:last-of-type
//         margin-bottom 0


#Calendar
    max-width 100em
    padding 10% 5%
    margin 0 auto
    // font-size 2rem

ul
    list-style none
    padding 0

.events
    // width 80%
    display grid
    grid-template-columns repeat(auto-fill, minmax(200px, 3fr))
    grid-gap 2em
    align-items stretch
    margin 0 auto

.event
    // padding-bottom 40%
    // background-color alpha($black, .04)
    height 0
    padding-bottom 80%
    border solid 1px alpha($black, .1)
    transition border 250ms ease-in-out, background 250ms ease-in-out
    position relative
    .topic
        position absolute
        bottom 0
        padding 1.6rem

    &:first-of-type
        grid-column 1/3
        grid-row 1/3
        font-size 1.6em
        .topic, .date
            padding 1.6em

    &:hover
        cursor pointer
        border-color $purple
        background none

</style>


