<template>
    <div id="FilterBlock">


        <h3 class="selected _clickable" @click="toggleFilters">{{ selectedFilter }}&nbsp;<svg id="Arrow" :class="{'opened': areFilters}" viewBox="0 0 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:1.5;"><path d="M8.707,1.414l-3.633,3.66l-3.66,-3.66"/></svg></h3>


        <transition name="filters">
            <div class="filters" v-show="areFilters">
                <ul>
                    <li @click="resetFilter" class="_clickable">Vše</li>
                    <li v-for="(filter, index) in givenFitlers"
                        :key="index"
                        @click="setFilter"
                        class="_clickable">{{ filter }}</li>
                </ul>
            </div>
        </transition>




    </div>
</template>


<script>
export default {
    name: 'FilterBlock',
    props: ['filters'],
    data() {
        return {
            filter: '',
            defaultFilter: 'Vše',
            areFilters: false
        }
    },
    computed: {
        givenFitlers() {
            // Getting given filters
            const filters = []
            this.filters.map( filter => filter.content.services.forEach( service => filters.push(service) ) )

            // Unique filters
            let unique = [... new Set(filters.sort())]
            return unique
        },

        selectedFilter() {
            // if ( this.areFilters ) return 'Zavřít'
            if ( this.filter === '' ) return this.defaultFilter
            else return this.filter
        },
    },


    methods: {
        setFilter(e) {
            this.filter = e.target.innerText
            this.toggleFilters()
            this.runFiltering()
        },
        resetFilter() {
            this.filter = ''
            this.toggleFilters()
            this.runFiltering()
        },
        toggleFilters() {
            this.areFilters = !this.areFilters
        },
        runFiltering() {
            if ( this.filter === '' ) {
                this.$emit('filtering', this.filters)
            } else {
                this.$emit('filtering', this.filters.filter( filter => filter.content.services.includes(this.filter) ))
            }
        },

    },
    mounted() {
        this.runFiltering()
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

.selected
    display inline-block
    font-size 1.4em

#Arrow
    position relative
    width .6em
    height @width
    fill none
    stroke-width 1px
    stroke $black
    transition transform 250ms ease-in-out
    pointer-events none

    &.opened
        transform rotate(180deg)



// ////////////////////////////////////////////////////////////////////////////
//                                  FILTER                                   //
// ////////////////////////////////////////////////////////////////////////////
.filters
    position relative
    max-height 40em
    overflow hidden

    ul
        padding 3.6em 0 0 0

    li
        display inline-block
        margin .6em 3em .6em 0
        font-family $secondary-font
        color alpha(#000, .45)
        &:last-of-type
            margin-right 0
        &:hover
            color $black



// ////////////////////////////////////////////////////////////////////////////
//                                TRANSITION                                 //
// ////////////////////////////////////////////////////////////////////////////
.filters-enter-active
    transition all 400ms cubic-bezier(0.550, 0.085, 0.680, 0.530)


.filters-enter, .filters-leave-to
    max-height 0 !important
    opacity 0 !important


.filters-leave-active
    transition all 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940)


.filters-enter-to, .filters-leave
    max-height 40em !important



</style>


