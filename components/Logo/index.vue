<template>

    <nuxt-link :to="'/'">
    <div id="LogoContainer" @click="closeMenu">
        <loading-block v-if="$store.state.loading.page" />

            <div
                id="Logo"
                :class="{ 'logo--dark' :$store.state.theme.dark }"
                @mouseenter="blink"
                @mouseleave="blink">

                <transition name="logo-slide">
                    <svg v-show="blinking" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M33.777,32.417c-3.436,3.558 -8.144,5.382 -13.947,5.382c-12.241,0 -19.83,-8.232 -19.83,-18.899c0,-10.667 7.732,-18.9 19.043,-18.9c10.452,0 18.184,8.09 18.184,18.9c0,1.503 -0.144,2.935 -0.43,4.295l-25.414,0c1.36,3.723 4.653,5.011 8.591,5.011c2.935,0 5.44,-1.145 6.872,-2.72l6.931,6.931Zm-7.217,-17.24c-1.146,-4.152 -4.367,-5.656 -7.589,-5.656c-4.08,0 -6.801,2.005 -7.803,5.656l15.392,0Z" /></svg>
                </transition>

                <transition name="logo-slide">
                    <svg v-show="!blinking" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M18.971,37.799c10.524,0 18.972,-8.232 18.972,-18.899c0,-10.667 -8.448,-18.9 -18.972,-18.9c-10.523,0 -18.971,8.233 -18.971,18.9c0,10.667 8.448,18.899 18.971,18.899Zm0,-10.452c-4.653,0 -8.233,-3.364 -8.233,-8.447c0,-5.083 3.58,-8.448 8.233,-8.448c4.654,0 8.233,3.365 8.233,8.448c0,5.083 -3.579,8.447 -8.233,8.447Z" /></svg>
                </transition>

            </div>

    </div>
    </nuxt-link>


</template>


<script>


import LoadingBlock from '../Loading/LoadingBlock'


export default {


    name: 'logo',


    components: {
        'loading-block': LoadingBlock
    },


    data() {
        return {
            blinking: true
        }
    },


    methods: {

        closeMenu() {
            this.$store.commit('toggleMenu', false)
        },

        blink() {
            this.blinking = !this.blinking
        }

    }
}
</script>


<style lang="stylus" scoped>

@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'
@import '~assets/stylus/transitions'


#LogoContainer
    width 6em
    height @width


#Logo
    absolute-centering()
    width 35%
    height @width

    svg
        position absolute
        width 100%
        height @width

    &.logo--dark

        svg
            fill $white !important

</style>


