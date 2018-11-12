<template>
    <article class="post-loading">
        <div class="post-loading__image"></div>
            <div class="post__details">
                <span></span>
                <span></span>
                <span></span>
            </div>
    </article>
</template>



<script>
export default {
    name: 'PostLoading'
}
</script>



<style lang="stylus">


@import '../../../assets/stylus/variables'


.post-loading__image
    height 30vh
    background-color $grey--lighter

.post__details
    span
        display block
        width 100%
        background-color $grey--lighter
        height 1rem
        margin 1rem 0
</style>


