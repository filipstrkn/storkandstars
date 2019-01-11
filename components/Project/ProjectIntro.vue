<template>
    <section id="ProjectIntro" class="_container--center _text--medium">


        <p :style="{color: $store.state.theme.text}">{{ blok.intro }}</p>
        <div class="columns">
            <div class="column__left">
                <p>{{ blok.column_left }}</p>
            </div>
            <div class="column__right">
                <p>{{ blok.column_right }}</p>

                <link-unit :to="blok.link_to.cached_url" class="_clickable">
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
    }
    // computed: {
    //     message() {
    //         return marked(this.blok.text)
    //     }
    // }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ProjectIntro
    padding-top calc(10% + 4em)

.columns
    font-size 1.2rem
    line-height 1.8em
    display flex
    justify-content space-between
    margin-top 4em

    div
        flex-shrink 1
        width 50%
        &:last-of-type
            margin-left 15%
            p
                margin-bottom 4em



</style>

