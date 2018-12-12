<template>
    <section id="ProjectNewsletterColumn" class="newletter__column">


        <h3>{{ blok.title }}</h3>
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
    padding 0 5% 10% 5%
    // max-width 20em

    h3
        margin-bottom 1em
        font-size 1.8em
        font-weight 300
    p
        font-size 1.3em
        font-weight 300
        line-height 1.7em
        color alpha($black, .45)

</style>

