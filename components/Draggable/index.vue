<template>
    <div id="Draggable"
        @mousedown="walkStart"
        @mousemove="isWalking"
        @mouseup="walkFinished"
        @mouseleave="walkFinished"
        :class="{'IamWalkinHere': $store.state.scrolls.walking}">
        <section class="draggable__body">
            <slot></slot>
        </section>
        <!-- <scroll-display></scroll-display> -->
    </div>
</template>



<script>

import ScrollDisplay from './_draggable/ScrollDisplay'

export default {
    name: 'Draggable',
    data() {
        return {
            totalWidth: 0,
            scroller: {
                isDown: false
            }
        }
    },
    props: ['position'],
    components: {
        'scroll-display': ScrollDisplay,
    },
    // beforeUpdate() {
    //     this.$store.commit('resetProgress', 0)
    // },
    methods: {
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
        walkFinished() {
            this.$store.commit('setWalk', {
                walking: false,
                current: {
                    isDown: false
                }
            })
        },
        isWalking(e) {
            const { isDown, startX, scrollLeft } = this.$store.state.scrolls.current
            const x = e.pageX
            const walk = (x - startX) * 2.2

            if (Math.abs(walk) > 3) {
                if (!isDown) return
                e.preventDefault()

                this.$store.commit('setWalk', {
                    walking: true,
                    scrollPosition: this.$el.childNodes[0].scrollLeft
                })

                // this.$store.commit('setProgress', this.$el.childNodes[0].scrollLeft + window.innerWidth )

                // Walk action
                this.$el.childNodes[0].scrollLeft = scrollLeft - walk
            }


        }
    }
}
</script>



<style lang="stylus" scoped>

#Draggable
    display flex
    cursor grab

.draggable__body
    display flex
    box-sizing border-box
    // height 100%
    min-height 100%
    overflow-x auto
    // overflow hidden
    padding-top 7rem
    white-space nowrap
    &::-webkit-scrollbar
        display: none

    & > *
        flex-shrink 0
        flex-grow 1


.IamWalkinHere
    cursor grabbing !important
    *
        pointer-events none

</style>


