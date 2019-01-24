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

                    <rocket-button :color="randomColor" class="menu-footer__rocket"  />
                    <span>Odstartuj svůj projekt</span>

                </div>


            </div>


        </section>
    </transition>
</template>



<script>

// Components
import MenuLink from './MenuLink'
import RocketButton from './RocketButton'
// Mixins
import randomColor from '~/mixins/randomColor'

export default {
    name: 'MenuBlock',
    mixins: [randomColor],
    components: {
        'menu-link': MenuLink,
        'rocket-button': RocketButton
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
                    // Set new RandomColor
                    this.setRandomColor()

                    // Show cascadecaly link in the menu
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

    .menu-footer__rocket
        margin 0 auto
        &:hover ~ span
            opacity 1


</style>


