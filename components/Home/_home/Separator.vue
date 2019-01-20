<template>
    <section id="Separator">
        <span></span>
    </section>
</template>


<script>
export default {
    name: 'Separator',
    props: ['blok']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#Separator
    display flex
    justify-content center

    span
        width 1px
        height 20em
        background-color $line


</style>
