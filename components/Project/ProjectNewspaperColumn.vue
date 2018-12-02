<template>
    <section id="ProjectNewsletterColumn" class="newletter__column">


        <h1>{{ blok.title }}</h1>
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


.newletter__column
    display inline-block
    vertical-align text-top
    // max-width 20em


</style>

