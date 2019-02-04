<template>
    <section id="IntroLeft" :class="{ 'intro-left--dark': $store.state.theme.dark }">
        <div class="_content">

            <title-block
                :title="blok.title"
                :options="{
                    duration: {min: 0, max: 600},
                    launcher: true,
                    size: 'title'
                }"/>

            <p class="_paragraph intro-left__text">{{ blok.text }}</p>

        </div>
    </section>
</template>



<script>

import TitleBlock from '~/components/Home/_home/TitleBlock'

export default {
    name: 'IntroLeft',
    components: {
        'title-block': TitleBlock
    },
    props: ['blok']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#IntroLeft
    padding calc(8em + 16vh) 0 $spacing-flex 0

    .intro-left__text
        max-width 30em
        margin 0 0 0 auto
        padding 4em 4em 0 0

    @media screen and (max-width: 500px)
        padding calc(4em + 16vh) 0 $spacing-flex-mb 0

.intro-left--dark
    color #fff

</style>
