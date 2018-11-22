<template>
    <div class="intro">
        <div class="intro__body" v-editable="blok">
            <h1 class="title" v-cloak>{{ blok.title }}</h1>
            <nuxt-link :to="blok.link_to" class="link">{{ blok.link_name }}</nuxt-link>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Intro',
    props: ['blok']
}
</script>



<style lang="stylus">

[v-cloak]
    display: none

.intro
    display flex
    align-items flex-end
    margin 0 10em
    padding-bottom 6%
    box-sizing border-box
    width 100%
    max-width 42em
    white-space pre-wrap
    .title
        position relative
        font-size 7vh
        font-size: calc(3.4rem + 6 * ((100vh - 320px) / 680))
        margin-bottom 16%
        font-style: normal

</style>


