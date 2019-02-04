<template>
    <section
        id="ProjectNewsletterColumn"
        class="newletter__column"
        :class="{'newsletter-column--dark': $store.state.theme.dark}">


        <h3
            v-if="blok.title"
            v-editable="blok">{{ blok.title }}</h3>
        <p v-editable="blok" class="_paragraph">{{ blok.text }}</p>



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
    padding 0 6% 5% 6%

    h3
        font-size 1.6em
        font-weight 400
        margin-bottom 1em

.newsletter-column--dark
    color $white
    *
        color $white


</style>

