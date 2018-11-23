<template>
    <div class="block">
        <h3 class="title--h3">{{ ctx.title }}</h3>
        <p>{{ ctx.description }}</p>
        <nuxt-link :to="ctx.link.to" class="link _clickable">{{ ctx.link.name }}</nuxt-link>
    </div>
</template>



<script>
export default {
    name: 'Block',
    props: ['ctx']
}
</script>



<style lang="stylus">

.block
    display inline-block
    margin 0 4em 0 12em
    max-width 18rem
    vertical-align top

    p
        white-space pre-wrap
        margin-bottom 3rem
        color alpha(#000, .6)

</style>


