<template>
    <div id="FilterBlock">



        <ul class="filters" v-show="areFilters">
            <li @click="resetFilter" class="_clickable _text--medium">Vše</li>
            <li v-for="(filter, index) in givenFitlers"
                :key="index"
                @click="setFilter"
                class="_clickable _text--medium">{{ filter }}</li>
        </ul>

        <div :class="{'hidden': areFilters}" class="selected _button _clickable" @click="showFilters" >
            <span class="selected__filter">{{ selectedFilter }}</span>
        </div>



    </div>
</template>


<script>
export default {
    name: 'FilterBlock',
    props: ['filters'],
    data() {
        return {
            filter: '',
            defaultFilter: 'Filtrovat',
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
            if ( this.areFilters ) return 'Zavřít'
            if ( this.filter === '' ) return this.defaultFilter
            else return this.filter
        }
    },


    methods: {
        setFilter(e) {
            this.filter = e.target.innerText
            this.areFilters = false
            this.runFiltering()
        },
        resetFilter() {
            this.filter = ''
            this.areFilters = false
            this.runFiltering()
        },
        showFilters() {
            this.areFilters = !this.areFilters
        },
        runFiltering() {
            if ( this.filter === '' ) {
                this.$emit('filtering', this.filters)
            } else {
                this.$emit('filtering', this.filters.filter( filter => filter.content.services.includes(this.filter) ))
            }
        },
        isVisible(index) {
            const duration = 100 * index
            console.log('visibility')
            if (this.areFilters) {
                setTimeout( () => {
                    return 'visible'
                }, duration)
            } return ''

        }
    },
    mounted() {
        this.runFiltering()
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#FilterBlock
    // position fixed
    // bottom 0
    // padding-bottom 2%
    // box-sizing border-box
    // left 50%
    // transform translateX(-50%)
    // z-index 2
    // min-height 100%
    // width 100%
    // overflow-y auto
    // display flex
    // transition all 250ms ease

    // flex-direction column
    // justify-content center
    // background-color yellow
    // pointer-events none
    // & > *
    //     pointer-events all
    .filters.opened
        // border-radius 4px
        background-color alpha($white, .6)

        .selected
            background-color $black


.selected
    position fixed
    bottom 5%
    left 50%
    z-index 2
    transform translateX(-50%)
    transition all 400ms ease
    .selected__filter
        pointer-events none
        // display inline-block
        // margin 0 auto
    &.hidden
        bottom -10em


.filters
    position fixed
    width 100%
    bottom 0
    padding 20% 5% 3% 5%
    background linear-gradient(to top, $white, alpha($white, 0))
    z-index 2
    li
        // display block
        display inline-block
        margin 0 1em
        text-align center
        // transition: all .4s ease-out
        transition-property all
        transition-duration .4s
        transition-timing-function ease-in-out
        // font-size 1rem
        // font-weight 700
        // font-family $secondary-font
        // background-color $blue
        // font-family $serif
        // color $white
        // width 14em
        // padding 1em .6em
        // border-radius 30em
        // transition all 400ms ease

// .show-enter-active, .show-leave-active
//     transition: all 2s ease-out

.show-enter, .show-leave-to
    background blue
    opacity: 0
    transform translateY(20%)


// .show-enter-active, .show-leave-active
//     transition: all 2s ease-out

.show-enter, .show-leave-to
    opacity: 1
    transform translateY(0)



</style>


