<template>
    <article class="post-loading">



        <!-- //////////////////////////////////////////////////////////////////////
            Image Placeholder
        ////////////////////////////////////////////////////////////////////// -->
        <div class="post__image post-loading__image"></div>



        <!-- //////////////////////////////////////////////////////////////////////
            Text Placeholders
        ////////////////////////////////////////////////////////////////////// -->
        <div class="post--loading__details">
            <span></span>
            <span></span>
            <span></span>
        </div>



    </article>
</template>



<script>
export default { name: 'PostLoading' }
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

.post-loading__image
    background-color $grey--lighter

.post--loading__details
    span
        display block
        width 100%
        background-color $grey--lighter
        height 1rem
        margin 1rem 0
</style>


