<template>
    <section id="Intro">

        <div class="_container--large _text--large">
            <h3 v-if="blok.pre_title">{{ blok.pre_title }}</h3>
            <p class="text--large">{{ blok.text }}</p>
            <h3 v-if="blok.post_title">{{ blok.post_title }}</h3>
        </div>

    </section>
</template>


<script>
export default {
    name: 'Intro',
    props: ['blok'],
    beforeMount() {
        this.$store.state.sidelink = {
            name: this.blok.sidelink_name,
            to: this.blok.sidelink_to.cached_url
        }
    },
    destroyed() {
        this.$store.state.sidelink = null
    }
}
</script>



<style lang="stylus">

#Intro
    position relative
    height 100vh
    display flex
    align-items center

    & > *
        margin-top 10%




</style>
