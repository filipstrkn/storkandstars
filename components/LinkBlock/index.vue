<template>



    <!-- //////////////////////////////////////////////////////////////////////
        Block Title
    ////////////////////////////////////////////////////////////////////// -->
    <div class="block--link">
        <nuxt-link :to="ctx.link.to" class="_clickable _link--underlined">
            {{ ctx.title }}
        </nuxt-link>
    </div>



</template>



<script>
export default {
    name: 'LinkBlock',
    props: ['ctx']
}
</script>



<style lang="stylus">

.block--link
    margin 0 4em 0 12em

</style>


