<template>
    <transition name="menu">
        <section v-show="$store.state.menu" id="Menu" @click="closeOnBlur">

            <div id="MenuBody">

                <div class="menu__content">

                    <ul class="links">
                        <menu-link
                            v-for="(link, index) in links"
                            :key="index"
                            :to="link.to"
                            :title="link.title"
                            :subtitle="link.subtitle" />
                    </ul>

                </div>

                <div class="menu__footer">
                    <nuxt-link id="Icon" :to="'/form/new-project'" class="_clickable">
                        <rocket-icon />
                    </nuxt-link>
                    <span>Odstartuj projekt</span>
                </div>

            </div>


        </section>
    </transition>
</template>



<script>

import LinkUnit from '~/components/Home/_home/LinkUnit'
import RocketIcon from './RocketIcon'
import MenuLink from './MenuLink'

export default {
    name: 'MenuBlock',
    components: {
        'link-unit': LinkUnit,
        'rocket-icon': RocketIcon,
        'menu-link': MenuLink
    },
    data() {
        return {
            links: [
                {
                    to: '/contact',
                    title: 'Design Sprint',
                    subtitle: 'Nevíte, co sprinty jsou?'
                },
                {
                    to: '/projects',
                    title: 'Projekty',
                    subtitle: 'Dělali jsme'
                },
                {
                    to: '/contact',
                    title: 'Vzdělání',
                    subtitle: 'Vše vás naučíme'
                },
                {
                    to: '/contact',
                    title: 'O nás',
                    subtitle: 'Kontaktujte nás'
                }
            ]
        }
    },
    methods: {
        closeOnBlur(e) {
            if (e.target.getAttribute('id') === 'Menu' ) this.$store.commit('toggleMenu')
        }
    },
    mounted() {
        let s;
        this.$store.watch( state => {
                s = state.menu
                return state.menu
            }, () => {

                if (s) {
                    this.$el.querySelectorAll('.links li').forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('show')
                        }, (index + 1) * 100)
                    })
                } else {
                    this.$el.querySelectorAll('.links li').forEach(link => {
                        link.classList.remove('show')
                    })
                }

        })

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
    justify-content flex-end
    &::after
        content ""
        position absolute
        top 0
        left 0
        min-height 100%
        width 100%
        background-color alpha(#000, .2)
        background-color alpha(#fafafa, .94)
        z-index 98


#MenuBody
    position relative
    display flex
    flex-direction column
    z-index 99
    max-width 36em
    width 100%
    overflow-y scroll
    background-color #fff
    box-shadow -3px 0 30px 0 alpha($black, .04), -1px 0 0 0 alpha(#000, 0)




.links
    font-size 1.6em
    padding 30% 4em 2em 4em

    li
        opacity 0
        transform translateX(2em)
        transition all 400ms ease-out
        &.show
            opacity 1
            transform translateX(0)

#Icon
    display flex
    align-items center
    justify-content center
    font-weight 500
    background-color #ffc5c8
    width 4em
    height @width
    border-radius 100%
    margin 0 auto
    *
        pointer-events none

    &:hover
        animation-name: shaking
        animation-duration: 0.8s
        transform-origin:50% 50%
        animation-iteration-count: infinite
        animation-timing-function: linear
        & ~ span
            opacity 1
    #Icon
        width 18px

.menu__content
    flex-grow 1
    flex-shrink 0
    overflow-y scroll
.menu__footer
    flex-grow 0
    flex-shrink 1
    text-align center
    span
        display block
        margin 1em 0
        opacity 0
        color alpha(#000, .45)


@keyframes shaking
	0%
        transform: translate(2px, 1px) rotate(0deg)
	10%
        transform: translate(-1px, -2px) rotate(-1deg)
	20%
        transform: translate(-3px, 0px) rotate(1deg)
	30%
        transform: translate(0px, 2px) rotate(0deg)
	40%
        transform: translate(1px, -1px) rotate(1deg)
	50%
        transform: translate(-1px, 2px) rotate(-1deg)
	60%
        transform: translate(-3px, 1px) rotate(0deg)
	70%
        transform: translate(2px, 1px) rotate(-1deg)
	80%
        transform: translate(-1px, -1px) rotate(1deg)
	90%
        transform: translate(2px, 2px) rotate(0deg)
	100%
        transform: translate(1px, -2px) rotate(-1deg)


</style>


