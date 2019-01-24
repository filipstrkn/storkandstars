<template>
    <section id="ProjectIntro" class="_container--center _text--medium">



        <!-- Intro Text -->
        <p :style="{color: $store.state.theme.text}" v-html="intro" v-editable="blok"></p>


        <!-- Columns -->
        <div class="columns" v-if="blok.column_left || blok.column_right || blok.link_name">

            <!-- Left -->
            <div class="column__left">
                <p v-if="blok.column_left" class="_paragraph" v-editable="blok">{{ blok.column_left }}</p>
            </div>

            <!-- Right -->
            <div class="column__right">
                <p v-if="blok.column_right" class="_paragraph" v-editable="blok">{{ blok.column_right }}</p>
                <link-unit v-if="blok.link_name" :to="blok.link_to.cached_url" class="_clickable">
                    {{ blok.link_name }}
                </link-unit>
            </div>

        </div>



    </section>
</template>



<script>


import LinkUnit from '~/components/Home/_home/LinkUnit'
import marked from 'marked'


export default {
    name: 'ProjectIntro',
    props: ['blok'],
    components: {
        'link-unit': LinkUnit
    },
    computed: {
        intro() {
            return marked(this.blok.intro)
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ProjectIntro
    padding-top calc(10% + 4em)

    &::after
        content ""
        display block
        margin 2em auto 0 auto
        width 1px
        height 10em
        background-color $line


.columns
    font-size 1.2rem
    line-height 1.8em
    display flex
    justify-content space-between
    margin-top 4em
    font-family $main-font
    font-weight 400

    div
        flex-shrink 1
        width 50%
        &:last-of-type
            margin-left 15%
            p
                margin-bottom 4em



</style>

