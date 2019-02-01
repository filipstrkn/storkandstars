<template>
    <section id="IntroLeft" :class="{ 'intro-left--dark': $store.state.theme.dark }">
        <div class="_content">
            <title-block
                :title="blok.title"
                :duration="{min: 0, max: 600}"
                :launcher="true" />
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
    // padding calc(8em + 20vh) 0 $spacing-flex 0
    padding calc(8em + 16vh) 0 0 0

.intro-left--dark
    color #fff

</style>
