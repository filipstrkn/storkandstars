<template>
    <div id="Draggable"
        @mousedown="walkStart"
        @mousemove="isWalking"
        @mouseup="walkFinished"
        @mouseleave="walkFinished">



        <!-- //////////////////////////////////////////////////////////////////
            Draggable Body
        /////////////////////////////////////////////////////////////////// -->
        <section class="draggable__body" :class="{'IamWalkinHere': $store.state.scrolls.walking}">
            <slot></slot>
        </section>



        <!-- //////////////////////////////////////////////////////////////////
            Favorite Link
        /////////////////////////////////////////////////////////////////// -->
        <favorite-link :favorite="favorite" v-if="!$store.state.scrolls.walking"></favorite-link>



        <!-- //////////////////////////////////////////////////////////////////
            Direction Pointer
        /////////////////////////////////////////////////////////////////// -->
        <director :type="'drag'"></director>



        <!-- //////////////////////////////////////////////////////////////////
            Scroll Progress Bar
        /////////////////////////////////////////////////////////////////// -->
        <scroll-display v-if="$store.state.scrolls.walking"></scroll-display>



    </div>
</template>



<script>


import FavoriteLink from '~/components/Draggable/_draggable/FavoriteLink'
import Director from '~/components/Draggable/_draggable/Director'
import ScrollDisplay from '~/components/Draggable/_draggable/ScrollDisplay'


export default {



    // ========================================================================
    // Name
    // ========================================================================
    name: 'Draggable',



    // ========================================================================
    // Data properties
    // ========================================================================
    data() {
        return {
            finnish: 0,
            favorite: {
                title: 'Design Sprints',
                link: '/'
            }
        }
    },


    // ========================================================================
    // Components
    // ========================================================================
    components: {
        'director': Director,
        'scroll-display': ScrollDisplay,
        'favorite-link': FavoriteLink
    },



    // ========================================================================
    // When component is mounted
    // ========================================================================
    mounted() {
        this._setFinnish()
        window.addEventListener('resize', () => this._setFinnish('reset'))
    },



    // ========================================================================
    // Methods
    // ========================================================================
    methods: {



        // --------------------------------------------------------------------
        //  Star the side scroll
        // --------------------------------------------------------------------
        //
        // Seeting a rule when arrow should be visible
        //
        //
        walkStart(e) {
            this.$store.commit('setWalk', {
                walking: false,
                current: {
                    isDown: true,
                    startX: e.pageX,
                    scrollLeft: this.$el.childNodes[0].scrollLeft
                }
            })
        },



        // --------------------------------------------------------------------
        //  When scrolling is finnished
        // --------------------------------------------------------------------
        //
        // Seeting a rule when arrow should be visible
        //
        //
        walkFinished() {
            this.$store.commit('setWalk', {
                walking: false,
                current: {
                    isDown: false
                }
            })
        },



        // --------------------------------------------------------------------
        //  When scrolling
        // --------------------------------------------------------------------
        //
        // Seeting a rule when arrow should be visible
        //
        //
        isWalking(e) {
            const { isDown, startX, scrollLeft } = this.$store.state.scrolls.current
            const walk = (e.pageX - startX) * 6

            if (Math.abs(walk) > 3) {
                if (!isDown) return
                e.preventDefault()

                this.$store.commit('setWalk', {
                    walking: true,
                    scrollPosition: this.$el.childNodes[0].scrollLeft
                })

                // Walk action
                this.$el.childNodes[0].scrollLeft = scrollLeft - walk


                // Set Position
                // console.log(this.$el.childNodes[0].scrollLeft + window.innerWidth)
                this._setPosition(this.$el.childNodes[0].scrollLeft)
            }
        },



        // --------------------------------------------------------------------
        //  Setting progress of scrolling
        // --------------------------------------------------------------------
        //
        // Seeting a rule when arrow should be visible
        //
        //
        _setPosition(scroll) {

            // Get the percentage value of scroll
            const progress = Math.floor(((scroll / (this.finnish - window.innerWidth)) * 100))
            // If progress is between 0 - 100% set its value
            if (progress >= 0 && progress <= 100) this.$store.commit('setProgress', progress)
        },



        // --------------------------------------------------------------------
        //  Setting the width of the scroll area
        // --------------------------------------------------------------------
        //
        // Seeting a rule when arrow should be visible
        //
        //
        _setFinnish(action) {
            const els = this.$el.childNodes[0].childNodes
            const lastOne = els[els.length - 1]


            switch(action) {
                case 'reset' :
                    this.finnish = 0
                    els.forEach(el => {
                        this.finnish += el.clientWidth
                    })
                    break;
                default :
                    els.forEach(el => {
                        this.finnish += el.clientWidth
                    })
                    break;
            }

        }

    }
}
</script>



<style lang="stylus">


@import '~assets/stylus/variables'


#Draggable
    display flex
    overflow hidden
    background-color $black + 40

    & > *
        display flex
        align-items center



.draggable__body
    display flex
    box-sizing border-box
    min-height 100%
    overflow hidden
    white-space nowrap
    background-color #fff
    transition transform 200ms ease-out, background-color 600ms ease-in-out
    &::-webkit-scrollbar
        display: none

    & > *
        flex-grow 1
        flex-shrink 0


    &.IamWalkinHere
        transform scale(.96)
        transition transform 600ms ease-out, background-color 600ms ease-in-out !important

        *
            pointer-events none

</style>


