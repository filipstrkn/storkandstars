<template>
    <transition name="menu">
        <section v-show="$store.state.menu" id="Menu" @click="closeOnBlur">

            <div id="MenuBody">

                <ul class="links">
                    <li @click="closeMenu">
                        <nuxt-link :to="'/contact'" class="_link _clickable">Design Sprint</nuxt-link>
                    </li>
                    <li @click="closeMenu">
                        <nuxt-link :to="'/projects'" class="_link _clickable">Projekty</nuxt-link>
                    </li>
                    <li @click="closeMenu">
                        <nuxt-link :to="'/'" class="_link _clickable">Vzdělávání</nuxt-link>
                    </li>
                    <li @click="closeMenu">
                        <nuxt-link :to="'/'" class="_link _clickable">Kontakt</nuxt-link>
                    </li>
                </ul>

                <nuxt-link :to="'/form/new-project'" class="menu__special-link _clickable">
                    <div id="Icon">
                        <rocket-icon slot="icon" />
                    </div>

                </nuxt-link>

            </div>


        </section>
    </transition>
</template>



<script>

import LinkUnit from '~/components/Home/_home/LinkUnit'
import RocketIcon from './RocketIcon'

export default {
    name: 'MenuBlock',
    components: {
        'link-unit': LinkUnit,
        'rocket-icon': RocketIcon
    },
    methods: {
        closeOnBlur(e) {
            if (e.target.getAttribute('id') === 'Menu' ) this.$store.commit('toggleMenu')
        },
        closeMenu() {
            this.$store.commit('toggleMenu', false)
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#Menu
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 99
    display flex
    &::after
        content ""
        position absolute
        top 0
        left 0
        min-height 100%
        width 100%
        background-color alpha(#000, .2)
        // background-color #000
        // background-color alpha(#000, .8)
        z-index 98


#MenuBody
    position absolute
    right 0
    display flex
    flex-direction column
    z-index 99
    min-height 100%

    background-color $white
    box-shadow -3px 0 30px 0 alpha($black, .02), -1px 0 0 0 alpha($black, 0)



.links
    font-size 2.2em
    flex-grow 1
    flex-shrink 0
    padding $spacing-flex 2em 2em 2em
    li
        margin 2% 0
        span
            display inline-block
            font-size .4em
            margin-right 1em
            vertical-align text-top

.socials
    max-width 15em
    // flex-grow 1
    li
        display inline-block
        margin 0 .6em
        font-family $secondary-font



.left
    // flex-grow 1
    // display flex
    // flex-direction column
    // justify-content space-between

    li
        opacity .45
        &:hover
            opacity 1

.menu__special-link
    display flex
    align-items center
    justify-content center
    // padding 1.6em 1em
    font-weight 500
    background-color #ffc5c8
    width 4em
    height @width
    border-radius 100%
    margin 0 auto 4em auto
    *
        pointer-events none

    #Icon
        width 18px
        // margin-right 10%

</style>


