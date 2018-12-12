<template>
    <nuxt-link
        :to="favorite.link"
        id="FavoriteLink">
        {{ favorite.title }}
    </nuxt-link>
</template>



<script>
export default {
    name: 'FavoriteLink',
    props: ['favorite']
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


#FavoriteLink
    font-size 1rem
    position fixed
    bottom $spacing-per--medium
    left $spacing-per--small
    &::before, &::after
        height 1px



</style>


