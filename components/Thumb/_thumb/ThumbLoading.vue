<template>
    <article class="thumb--loading"></article>
</template>



<script>
export default {
    name: 'ThumbLoading'
}
</script>


<style lang="stylus">

@import '~assets/stylus/variables'

.thumb--loading
    width 60vh
    height calc(90vh - 5em)
    margin 0 2rem
    position relative
    background-color $grey--lighter

</style>


