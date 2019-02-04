<template>
    <section id="ProjectIntro" :class="{ 'is-intro': blok.is_intro }">



        <!-- Intro Text -->
        <p
            v-editable="blok"
            class="_text--medium">{{ blok.intro }}</p>


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


export default {
    name: 'IntroColumn',
    props: ['blok'],
    components: {
        'link-unit': LinkUnit
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ProjectIntro
    padding $spacing-flex 0 0 0
    max-width 54em
    margin 0 auto
    @media screen and (max-width: 750px)
        padding $spacing-flex 2em 0 2em

    &::after
        content ""
        display block
        margin 2em auto 0 auto
        width 1px
        height 10em
        background-color $line

    &.is-intro
        padding calc(8em + 16vh) 0 0 0 !important

.columns
    display flex
    justify-content space-between
    margin-top 5em
    font-family $font
    font-weight 400
    @media screen and (max-width: 500px)
        flex-direction column
        div
            width 100% !important
            margin 2em 0 !important

    div
        flex-shrink 1
        width 50%
        &:last-of-type
            margin-left 15%
            p
                margin-bottom 4em



</style>

