<template>

    <p class="date">
        <span>{{ date.from.day }}.</span>
        <span class="" v-if="date.from.month">{{ date.from.month + '.' }}</span>
        <span v-if="date.from.year">{{ date.from.year }}</span>
        <span v-if="date.to.day" class="to">{{ date.to.day }}.</span>
        <span v-if="date.to.month">{{ date.to.month }}.</span>
        <span v-if="date.to.year">{{ date.to.year }}</span>
    </p>

</template>



<script>
export default {
    name: 'DateBlock',
    props: ['from', 'to'],
    methods: {

        formatDate(date) {
            return date.split(" ")[0].split("-").map(part => {
                return part[0] === '0'
                ? part.substr(1)
                : part
            })

        }
    },
    computed: {
        date() {
            const from = this.formatDate(this.from)
            const to = this.formatDate(this.to)
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



<style lang="stylus">

.date .to::before
    content ""
    display inline-block
    vertical-align middle
    height 1px
    width .8em
    margin 0 .3em
    background-color alpha(#000, .45)

</style>
