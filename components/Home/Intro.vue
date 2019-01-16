<template>
    <section id="Intro">

        <div class="_container--center _text--large _text">
            <h3 v-if="blok.pre_title" class="_subtitle">{{ blok.pre_title }}</h3>
            <p v-html="message"></p>
            <h3 v-if="blok.post_title" class="_subtitle">{{ blok.post_title }}</h3>
        </div>

    </section>
</template>



<script>

import marked from 'marked'

export default {
    name: 'Intro',
    props: ['blok'],
    computed: {
        message() {
            return marked(this.blok.text)
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'
@import '~assets/stylus/animations'

#Intro
    padding-top 28vh

    // p
    //     animation intro-in 600ms ease-in-out forwards


</style>
