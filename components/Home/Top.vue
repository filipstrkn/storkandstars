<template>
    <section id="Top">


        <!-- //////////////////////////////////////////////////////////////
            Intro
        /////////////////////////////////////////////////////////////// -->
        <!-- <div class="_content">
            <div class="intro__content _text--large">
                <title-block id="IntroTitle" :title="'Vybrané projekty'" :duration="{min: 0, max: 600}" :launcher="true" />
            </div>
        </div> -->
        <!-- <div class="top__intro" v-if="blok.title">
            <p class="_text--medium" v-editable="blok">{{ blok.title }}</p>
            <h3 class="_subtitle" v-editable="blok">{{ blok.subtitle }}</h3>
        </div> -->

        <!-- //////////////////////////////////////////////////////////////
            List of content
        /////////////////////////////////////////////////////////////// -->

        <div>
            <project-list :projects="$store.state.projects.top" />
        </div>


        <!-- <div class="top__link">
            <link-unit
                :to="blok.link_to.cached_url"
                class="lu">{{ blok.link_name }}</link-unit>
        </div> -->

    </section>
</template>



<script>

import TitleBlock from './_home/TitleBlock'
import ProjectList from '~/components/Lists/ProjectList'
import LinkUnit from './_home/LinkUnit'

export default {
    name: 'Top',
    props: ['blok'],
    components: {
        'title-block': TitleBlock,
        'project-list': ProjectList,
        'link-unit': LinkUnit
    },

    created() {


        const options = () => {
            const version = 'draft' || 'published'
            const path = 'projects/'
            return this.blok.tag !== 'all'
            ? { version, starts_with: path, with_tag: this.blok.tag }
            : { version, starts_with: path }
        }

        if ( Array.isArray(this.$store.state.projects.top) && this.$store.state.projects.top.length === 0 ) {
            return this.$storyapi.get( 'cdn/stories', options() ).then((res) => {
                this.$store.state.projects.top = res.data.stories
                return res.data
            }).catch((res) => {
                context.error({ statusCode: res.response.status, message: res.response.data })
            })
        }
    }
}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'


.top__intro
    display inline-block
    position relative
    left 50%
    width 40%
    padding-top $spacing-flex
    padding-left 1em

    &::before
        content ""
        position absolute
        left 0
        bottom 0
        top 0
        background-color $line
        width 1px

    p
        white-space pre-wrap
        max-width 15em


.project__intro
    margin-left 10%
    padding 0 2rem
    max-width 12em
    width 100%
    margin-right 10%


.director
    position relative
    display block
    height 1px
    width 6rem
    background-color black
    &::after,
    &::before
        content ""
        position absolute
        right 0
        height 1px
        background-color #000
        width .5rem

    &::before
        transform rotate(135deg) translateX(100%)
        transform-origin right
        right 0

    &::after
        right -.5rem
        transform rotate(45deg) translateX(-100%)
        transform-origin left



#Top
    padding-top $spacing-flex
    padding-bottom $spacing-flex
    @media screen and (max-width: 500px)
        padding-top $spacing-flex-mb
        padding-bottom $spacing-flex-mb

    .list
        max-width 86em
        margin 0 auto
        padding 20% 6em 0 6em

        .list__item
            margin-top 50%
        .list__column:nth-child(odd)
            // background blue
            .list__item:first-of-type
                margin-top -20%


</style>


