<template>
    <article class="post">
        <a href="">
            <div class="post__image"></div>
            <div class="post__details">
                <h3>Titulek</h3>
                <p>iwubcw eibdw dwdbwd wdbwd wedowqdq oqbnsa xwubconsad xubx qxobqw oqw x qowubdx qz xouw xqwoisbz  xqob haixs.</p>
            </div>
        </a>
    </article>
</template>



<script>
export default {
    name: 'Post'
}
</script>



<style lang="stylus">

.post
    margin 0 5em
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
.post__image
    height 30vh
    background-color #f0f0f0


</style>
