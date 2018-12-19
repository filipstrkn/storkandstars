<template>

    <article class="event-unit">

        <div class="event" :class="`event--${blok.theme}`" >

            <div class="content">

                <p class="topic">{{ blok.topic }}</p>
                <div class="info">
                    <p class="date">
                        <span>{{ date.from.day }}.</span>
                        <span v-if="date.from.month">{{ date.from.month + '.' }}</span>
                        <span v-if="date.from.year">{{ date.from.year }}</span>
                        <span v-if="date.to.day" class="to">{{ date.to.day }}.</span>
                        <span v-if="date.to.month">{{ date.to.month }}.</span>
                        <span v-if="date.to.year">{{ date.to.year }}</span>
                    </p>
                    <div v-if="blok.city" class="city">
                        <svg viewBox="0 0 17 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Pin-Icon" serif:id="Pin Icon" d="M16.498,11.416c-1.921,6.462 -7.998,12.584 -7.998,12.584c0,0 -6.056,-6.106 -7.987,-12.554c-0.326,-0.907 -0.513,-1.93 -0.513,-2.951c0,-4.719 3.806,-8.495 8.5,-8.495c4.694,0 8.5,3.776 8.5,8.495c0,1.009 -0.183,2.023 -0.502,2.921Zm-7.998,-6.416c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5Z"/></svg>
                        <span>{{ blok.city }}</span>
                    </div>

                </div>

            </div>


            <div class="footer">

                <div class="teacher">
                    <span v-for="(teacher, index) in blok.teachers" :key="index" class="avatar" :style="getAvatar(teacher)"></span>
                </div>

            </div>
        </div>

        <link-unit :to="'/'" class="link">
            {{ blok.link_name }}
        </link-unit>







    </article>

</template>



<script>


import LinkUnit from '~/components/Home/_home/LinkUnit'


export default {
    name: 'EventUnit',
    props: ['blok'],
    components: {
        'link-unit': LinkUnit
    },
    methods: {
        getAvatar(teacher) {
            return {
                backgroundImage: `url(/teachers/${teacher}.png)`
            }
        },
        formatDate(date) {
            return date.split(" ")[0].split("-")

        }
    },
    computed: {
        date() {
            const from = this.formatDate(this.blok.from)
            const to = this.formatDate(this.blok.to)
            const finalDate = {
                from: {},
                to: {}
            }

            finalDate.from.day = from[2]
            finalDate.from.month = from[1] === to[1] ? undefined : from[1]
            finalDate.from.year = from[0] === to[0] ? undefined : from[0]
            finalDate.to.day = to[2]
            finalDate.to.month = to[1]
            finalDate.to.year = from[0] === to[0] ? undefined : to[0]


            return finalDate

        }
    }
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'

.event-unit
    padding-bottom 1em
    &:hover
        .link
            opacity 1
            transform translateY(0)

.link
    display block
    margin-top 1em
    opacity 0

.event
    display flex
    flex-direction column
    position relative
    padding 16% 4em 4em 4em
    font-family $secondary-font
    white-space pre-wrap
    color $black

    .content
        flex-grow 1

    .footer
        text-align right
    .teacher
        .avatar
            display inline-block
            vertical-align middle
            width 2.8em
            height @width
            border-radius 100%
            background-color alpha(#000, .1)
            background-size cover
            background-position center
            margin-left .6em
            &:first-of-type
                margin-left 0


.info
    display flex
    flex-wrap wrap

.city
    display inline-block

    svg
        width .8em
        height @width
        fill $black


.date
    flex-shrink 0
    display flex
    align-items center
    margin-right 1em

    & .to::before
        content ""
        display inline-block
        vertical-align middle
        height 1px
        width .8em
        margin 0 .6em
        background-color $black


.topic
    font-weight 600
    font-size 1.2em
    margin-bottom 1em
    font-family $secondary-font
    font-family $main-font





.event--pink
    background-color #fff0f6

.event--red
    background-color #ff7a73
    color $white
    svg
        fill $white
    .to::before
        background-color $white


.event--green
    background-color #6af7f7

.event--blue
    background-color #51adfd
    color $white
    svg
        fill $white
    .to::before
        background-color $white


.event--yellow
    background-color #FFD36D


.event--purple
    background-color #9871FC
    color $white
    svg
        fill $white
    .to::before
        background-color $white



</style>
