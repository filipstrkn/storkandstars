<template>
    <transition name="menu">
        <section v-show="$store.state.menu" id="Menu" @click="closeOnBlur">

            <div id="MenuBody">
                <div class="menu__container">

                    <div class="menu__content">
                        <!-- <ul class="links"> -->
                        <ul class="links _text--medium">
                            <li>
                                <nuxt-link :to="'/contact'" class="_clickable">Design Sprint</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="'/projects'" class="_clickable">Projekty</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="'/'" class="_clickable">Vzdělávání</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="'/'" class="_clickable">Kontakt</nuxt-link>
                            </li>
                        </ul>
                        <ul class="socials">
                            <li class="_clickable">slack</li>
                            <li class="_clickable">instagram</li>
                            <li class="_clickable">twitter</li>
                            <li class="_clickable">facebook</li>
                            <li class="_clickable">linkedin</li>
                        </ul>
                    </div>

                    <link-unit :to="'/'" class="menu__specials">Odstartuj projekt</link-unit>

                </div>

            </div>


        </section>
    </transition>
</template>



<script>

import LinkUnit from '~/components/Home/_home/LinkUnit'

export default {
    name: 'MenuBlock',
    components: {
        'link-unit': LinkUnit
    },
    methods: {
        closeOnBlur(e) {
            if (e.target.getAttribute('id') === 'Menu' ) this.$store.commit('toggleMenu')
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
        background-color alpha(#000, .1)
        z-index 98


#MenuBody
    position relative
    z-index 99

    width 100%
    height 96%
    max-height 56em

    background-color $white
    box-shadow 0 3px 30px 0 alpha($black, .02), 0 1px 0 0 alpha($black, 0)


.menu__container
    position relative
    max-width 100em
    margin 0 auto
    height 100%


.menu__content
    position absolute
    bottom 10%
    left 16%


.links
    display flex
    flex-direction column
    margin-bottom 20%
    li
        margin 2% 0
        a
            position relative
            &::after
                content ""
                position absolute
                width 0
                height 3px
                background-color $blue
                bottom 0
                left 0
                transition width 400ms ease-out
        &:hover
            a::after
                width 100%

.socials li
    margin .6em 0
    font-family $secondary-font



.menu__specials
    position absolute
    bottom 10%
    right 16%

</style>


