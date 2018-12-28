<template>
    <section id="ProjectParagraph">

        <!-- <div class="_container--center">
            <h1>{{ blok.title }}</h1>
            <h1>{{ blok.subtitle }}</h1>

            <p>{{ blok.text }}</p>
        </div> -->

        <div class="text">
            <h3 v-if="blok.title" :style="theme">{{ blok.title }}</h3>
            <p>{{ blok.text }}</p>
        </div>



    </section>
</template>



<script>

import marked from 'marked'

export default {
    name: 'ProjectParagraph',
    props: ['blok'],
    computed: {
        theme() {
            return {
                color: this.$store.state.theme.text
            }
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

.text
    max-width 40em
    padding: 10% 2rem
    margin-left: 10%


h3
    font-size 2em
    font-weight 400

p
    font-size 1.2rem
    line-height 1.8em
    margin-top 2em


</style>

