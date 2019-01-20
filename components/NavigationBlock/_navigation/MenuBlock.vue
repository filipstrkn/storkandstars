<template>
    <transition name="menu">
        <section v-show="$store.state.menu" id="Menu" @click="closeOnBlur">

            <div id="MenuBody">
                <div class="menu__container">

                    <div class="menu__content">
                        <!-- <ul class="links"> -->
                        <span>Menu</span>
                        <ul class="links _text--large">
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
                    </div>


                    <div class="left">
                        <!-- <ul class="socials">
                            <li class="_clickable">slack</li>
                            <li class="_clickable">instagram</li>
                            <li class="_clickable">twitter</li>
                            <li class="_clickable">facebook</li>
                            <li class="_clickable">linkedin</li>
                        </ul> -->
                        <link-unit :to="'/form/new-project'" class="menu__specials">
                            <rocket-icon slot="icon" />
                            Odstartuj projekt
                        </link-unit>
                    </div>

                </div>

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
    &::after
        content ""
        position absolute
        top 0
        left 0
        min-height 100%
        width 100%
        background-color alpha(#000, .45)
        background-color #000
        // background-color alpha(#000, .8)
        z-index 98


#MenuBody
    position absolute
    display inline-block
    right 0
    // display flex
    // align-items center
    // justify-content center
    z-index 99

    // width 100%
    min-height 40em
    min-height 100%
    // height 96%
    // max-height 56em

    background-color $white
    // background-color #000
    // background-color $blue
    // color $white
    box-shadow 0 3px 30px 0 alpha($black, .02), 0 1px 0 0 alpha($black, 0)


.menu__container
    // flex-grow 1
    // flex-shrink 0
    position relative
    // max-width 86em
    margin 0 auto
    // display flex
    // justify-content space-around
    // align-items flex-end
    padding $spacing-flex 2em
    // height 100%


// .menu__content
//     position absolute
//     bottom 10%
//     left 16%


.links
    // display flex
    // flex-direction column
    // margin-bottom 20%
    li
        margin 2% 0

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

// .menu__specials
//     position absolute
//     bottom 10%
//     right 16%

</style>


