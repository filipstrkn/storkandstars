<template>
    <section id="Top">
        <draggable>



            <!-- //////////////////////////////////////////////////////////////
                Intro
            /////////////////////////////////////////////////////////////// -->
            <div class="project__intro _text--medium" v-if="blok.title">
                <div>
                    <p>{{ blok.title }}</p>
                    <span class="director"></span>
                </div>
            </div>

            <!-- //////////////////////////////////////////////////////////////
                List of content
            /////////////////////////////////////////////////////////////// -->
            <div class="list" data-visible="false">
                <thumb v-for="(top, index) in $store.state.projects.top" :key="index" :content="top.content" :link="top.full_slug"/>
            </div>




        </draggable>
    </section>
</template>



<script>

import Draggable from '~/components/Draggable'
import Thumb from '~/components/Thumb'
import isVisible from '~/mixins/isVisible'

export default {
    name: 'Top',
    props: ['blok'],
    mixins: [isVisible],
    components: {
        'draggable': Draggable,
        'thumb': Thumb
    },
    computed: {
        tops() {
            return [
                {
                    name: 'Biologico',
                    thumbnail: 'image/image.png'
                }
            ]
        }
    },

    created() {

        const options = () => {
            const version = 'draft' || 'published'
            const path = 'projects/'
            return this.blok.tag !== 'all'
            ? { version, starts_with: path, with_tags: this.blok.tag }
            : { version, starts_with: path }
        }


        if ( Array.isArray(this.$store.state.projects.top) && this.$store.state.projects.top.length === 0 ) {
            return this.$storyapi.get( 'cdn/stories', options() ).then((res) => {
                this.$store.state.projects.top = res.data.stories
                return res.data
            }).catch((res) => {
                context.error({ statusCode: res.response.status, message: res.response.data })
            })
        } else {
            console.log('Already set')
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

.project__intro
    display flex
    align-items center
    margin-left 10%
    padding 0 2rem
    max-width 12em
    width 100%
    white-space pre-wrap
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

    .list
        display flex
        align-items center

    [data-visible="false"]
        transition all $appear ease-in
        opacity 0
        transform translateX(6rem)

        .thumb
            transition margin-right $appear ease-in
            margin-right 12em

    [data-visible="true"]
        transition all $appear ease-out
        opacity 1
        transform translateX(0)

        .thumb
            transition margin-right $appear ease-out
            margin-right 6em

</style>


