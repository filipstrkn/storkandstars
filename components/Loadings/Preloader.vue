<template>
    <div v-if="$store.state.loading.preloading" class="preLoader">



        <div class="preloader__icon">

            <transition name="icon-slide">
                <svg v-show="blinking" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M33.777,32.417c-3.436,3.558 -8.144,5.382 -13.947,5.382c-12.241,0 -19.83,-8.232 -19.83,-18.899c0,-10.667 7.732,-18.9 19.043,-18.9c10.452,0 18.184,8.09 18.184,18.9c0,1.503 -0.144,2.935 -0.43,4.295l-25.414,0c1.36,3.723 4.653,5.011 8.591,5.011c2.935,0 5.44,-1.145 6.872,-2.72l6.931,6.931Zm-7.217,-17.24c-1.146,-4.152 -4.367,-5.656 -7.589,-5.656c-4.08,0 -6.801,2.005 -7.803,5.656l15.392,0Z" /></svg>
            </transition>

            <transition name="icon-slide">
                <svg v-show="!blinking" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M18.971,37.799c10.524,0 18.972,-8.232 18.972,-18.899c0,-10.667 -8.448,-18.9 -18.972,-18.9c-10.523,0 -18.971,8.233 -18.971,18.9c0,10.667 8.448,18.899 18.971,18.899Zm0,-10.452c-4.653,0 -8.233,-3.364 -8.233,-8.447c0,-5.083 3.58,-8.448 8.233,-8.448c4.654,0 8.233,3.365 8.233,8.448c0,5.083 -3.579,8.447 -8.233,8.447Z" /></svg>
            </transition>

        </div>



    </div>
</template>



<script>


export default {
    name: 'Preloader',

    data() {
        return {
            blinking: true
        }
    },


    methods: {
        blink() {
            this.blinking = !this.blinking
        }
    },


    created() {

        this.$store.watch(
            // Getting the watched value
            state => {
                const { pageReady } = state.loading
                return pageReady
            },

            // Setting action when the value change
            isPageReady => {

                // If root component has all child-components loaded cancel the preloading
                let blinkingInterval = setInterval(this.blink, 1000)
                if (isPageReady) {
                    setTimeout(() => {
                        this.$store.commit('setLoading', {preloading: false})
                        clearInterval(blinkingInterval)
                    }, 3000)
                }
        })

    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/mixins'

.preLoader
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color #fff
    z-index 103

.preloader__icon
    absolute-centering()
    width 1em
    height @width
    position relative
    pointer-events none
    font-size calc(.00848 * 100vw + 2rem)

    svg
        position absolute
        width 100%
        height @width
        fill alpha(#000, .1)


.icon-slide-enter
    top 60%
    opacity 0

.icon-slide-enter-to
    opacity 1
    top 0

.icon-slide-enter-active
    transition all 750ms ease-out

.icon-slide-leave-active
    transition all 450ms cubic-bezier(0.165, 0.84, 0.44, 1)

.icon-slide-leave
    top 0

.icon-slide-leave-to
    opacity 0
    top -120%



</style>
