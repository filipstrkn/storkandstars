<template>
    <transition name="menu">
        <section
            v-show="$store.state.menu"
            @click="closeOnBlur"
            id="Menu"
            class="menu"
            :class="{'menu--dark': $store.state.theme.dark}">


            <!-- Body -->
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
                    <ul class="socials">
                        <a
                            v-for="(social, index) in socials"
                            :key="index"
                            :href="social.to">
                            <li>{{ social.title }}</li>
                        </a>
                    </ul>

                    <div class="additional">
                        <span>+420 721 465 555</span>
                        <span>studio@eoeo.cz</span>
                    </div>


                </div>

            </div>


        </section>
    </transition>
</template>



<script>

// Components
import MenuLink from './MenuLink'

export default {
    name: 'MenuBlock',
    components: {
        'menu-link': MenuLink
    },
    data() {
        return {
            links: [
                {
                    to: '/design-sprint',
                    title: 'Design Sprint',
                    subtitle: 'Nevíš, co sprinty jsou?'
                },
                {
                    to: '/projects',
                    title: 'Projekty',
                    subtitle: 'Dělali jsme'
                },
                {
                    to: '/about',
                    title: 'O nás',
                    subtitle: 'Poznej nás tým'
                }
            ],
            socials: [
                {
                    title: 'Instagram',
                    to: 'https://www.instagram.com/eoeo_studio/'
                },
                {
                    title: 'LinkedIn',
                    to: 'https://www.linkedin.com/company/eoeo'
                },
                {
                    title: 'Twitter',
                    to: 'https://twitter.com/eoeostudio'
                },
                {
                    title: 'Facebook',
                    to: 'https://www.facebook.com/eoeostudio/'
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
                    // Show cascadecaly link in the menu
                    this.$el.querySelectorAll('.links li').forEach((link, index) => {
                        link.classList.remove('show')
                        setTimeout(() => {
                            link.classList.add('show')
                        }, (index + 1) * 200)
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
    justify-content flex-start
    &::after
        content ""
        position absolute
        top 0
        left 0
        min-height 100%
        width 100%
        z-index 98


.menu
    &::after
        background-color alpha(#fafafa, .94)


#MenuBody
    position relative
    display flex
    flex-direction column
    z-index 99
    margin-left 6em
    max-width 36em
    width 100%
    overflow-y scroll
    background-color #fff
    box-shadow 3px 0 30px 0 alpha($black, .04), 1px 0 0 0 alpha(#000, 0)

    @media screen and (max-width: 760px)
        margin-left 0
        max-width none

.links,
.menu__footer
    padding calc(3rem + 5vh) 4rem 2rem 4rem


.links
    li
        font-size 1.6em
        opacity 0
        transform translateX(-2em)
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


.socials
    li
        margin .4em 0
        color alpha($black, .45)
        &:hover
            color $black


.additional
    margin-top 4em
    font-size .9rem
    span
        display block
        font-family 'Muli', sans-serif


.menu--dark
    &::after
        background-color alpha(#000, .75) !important

    #MenuBody
        background-color $black !important

    .menu__footer span
        color alpha(#fff, .45)

    .socials
        li
            color alpha($white, .45)
            &:hover
                color $white




</style>


