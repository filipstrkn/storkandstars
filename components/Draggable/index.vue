<template>
    <div id="Draggable">
        <section class="draggable__body">
            <slot></slot>
        </section>
        <scroll-display :position="`${scrollPosition}%`"></scroll-display>
    </div>
</template>



<script>

import ScrollDisplay from './_draggable/ScrollDisplay'

export default {
    name: 'Draggable',
    data() {
        return {
            scrollPosition: 30
        }
    },
    props: ['position'],
    components: {
        'scroll-display': ScrollDisplay,
    }
}
</script>



<style lang="stylus" scoped>

.draggable__body
    display flex
    box-sizing border-box
    height 100%
    overflow-x auto
    // overflow hidden
    padding-top 7rem
    white-space nowrap
    &::-webkit-scrollbar
        display: none

    & > *
        flex-shrink 0
        flex-grow 1
    //     display inline-block

</style>


