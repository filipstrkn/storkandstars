<template>
    <div id="ContactLink">
        <nuxt-link :to="link.to.cached_url" class="_link--vert _clickable">{{ link.name }}</nuxt-link>
    </div>
</template>


<script>
export default {
    name: 'SideLink',
    props: ['link']
}
</script>



<style lang="stylus">

#ContactLink
    position fixed
    bottom 3em
    bottom 15%
    right 5%
    transform rotate(90deg)
    width 1rem
    height @width
    white-space nowrap


</style>


