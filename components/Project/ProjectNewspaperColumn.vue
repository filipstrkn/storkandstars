<template>
    <section id="ProjectNewsletterColumn" class="newletter__column">


        <h3
            v-if="blok.title"
            v-editable="blok"
            :style="{color: $store.state.theme.text}"
            class="title--h3">{{ blok.title }}</h3>
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

</style>

