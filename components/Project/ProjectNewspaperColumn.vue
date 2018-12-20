<template>
    <section id="ProjectNewsletterColumn" class="newletter__column">


        <h3 :style="{color: $store.state.theme.text}">{{ blok.title }}</h3>
        <p>{{ blok.text }}</p>



    </section>
</template>



<script>
export default {
    name: 'ProjectNewsletter',
    props: ['blok']
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

.newletter__column
    display inline-block
    vertical-align text-top
    padding 5%


    h3
        font-size 2em
        font-weight 400
    p
        font-size 1.2rem
        line-height 1.8em
        margin-top 1em

</style>

