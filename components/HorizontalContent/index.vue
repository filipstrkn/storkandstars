<template>
    <article id="HorizontalContent">

        <div class="intro">
            <h1 class="title" v-editable="blok">{{ blok.title }}</h1>
            <a href="" class="link">Contact us</a>
            <!-- <p v-editable="blok">{{ blok.description }}</p> -->
        </div>

        <component
            :key="blok._uid"
            v-for="blok in blok.content"
            :blok="blok"
            :is="blok.component">
        </component>

        <div id="HorizontalScroller"></div>

    </article>
</template>


<script>
export default {
    name: 'HorizontalContent',
    props: ['blok']
}
</script>


<style lang="stylus">

#HorizontalContent
    white-space nowrap
    & > *
        display inline-block

.intro
    position relative
    bottom 2em
    margin 0 10em
    max-width 30rem
    white-space pre-wrap
    .title
        position relative
        font-size 7vh
        font-size: calc(3.2rem + 6 * ((100vh - 320px) / 680))
        margin-bottom 2em
        font-style: normal

        // &::after
        //     content ""
        //     position absolute
        //     bottom -10px
        //     left 10%
        //     height 1px
        //     background-color black
        //     width 150%



#HorizontalScroller
    position fixed
    bottom 0
    left 0
    height 6px
    width 60%
    background-color #000
    pointer-events none
    z-index 998
    &::after
        content ""
        position fixed
        width 100%
        height 6px
        background-color alpha(#000, .1)
        z-index 997


</style>


