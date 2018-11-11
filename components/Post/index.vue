<template>
    <article class="post">
        <nuxt-link to="/">
            <div class="post__image"></div>
            <div class="post__details">
                <h3>{{ post.title }}</h3>
                <p>{{ post.description }}</p>
            </div>
        </nuxt-link>
    </article>
</template>



<script>
export default {
    name: 'Post',
    props: ['post']
}
</script>



<style lang="stylus">

.post
    display inline-block
    vertical-align top
    margin 0 2.4rem
    vertical-align top
    width 50vh
    white-space pre-wrap
    transition background-color 250ms ease-in-out, box-shadow 250ms ease-in-out
    font-family: 'Source Sans Pro', sans-serif
    p
        font-size .9rem
        color alpha(#000, .65)
    a
        text-decoration none
        color inherit

    &:hover
        background-color #f9f9f9
        box-shadow 0 0 0 2em @background-color
        h3
            color #fb116e !important
.post__image
    height 30vh
    background-color #f0f0f0


</style>
