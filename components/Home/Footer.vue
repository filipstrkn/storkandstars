<template>
    <footer id="Footer" :class="{'footer--dark': $store.state.theme.dark}">

        <!-- UpperFooter = slot -->


        <!-- <logo class="footer__logo" /> -->
        <!-- <span></span> -->

        <div class="footer__socials">

            <nuxt-link :to="'/'">
             <svg id="instagram" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M16.634,0c4.175,0 7.561,3.386 7.561,7.561l0,9.073c0,4.175 -3.386,7.561 -7.561,7.561l-9.073,0c-4.175,0 -7.561,-3.386 -7.561,-7.561l0,-9.073c0,-4.175 3.386,-7.561 7.561,-7.561l9.073,0Zm0,2.268l-9.073,0c-2.919,0 -5.293,2.374 -5.293,5.293l0,9.073c0,2.918 2.374,5.292 5.293,5.292l9.073,0c2.918,0 5.292,-2.374 5.292,-5.292l0,-9.073c0,-2.919 -2.374,-5.293 -5.292,-5.293Zm-4.537,3.781c-3.34,0 -6.048,2.708 -6.048,6.048c0,3.341 2.708,6.049 6.048,6.049c3.341,0 6.049,-2.708 6.049,-6.049c0,-3.34 -2.708,-6.048 -6.049,-6.048Zm0,9.829c-2.083,0 -3.78,-1.697 -3.78,-3.781c0,-2.085 1.697,-3.78 3.78,-3.78c2.084,0 3.781,1.695 3.781,3.78c0,2.084 -1.697,3.781 -3.781,3.781Zm6.503,-11.089c0.444,0 0.806,0.361 0.806,0.806c0,0.445 -0.362,0.806 -0.806,0.806c-0.445,0 -0.806,-0.361 -0.806,-0.806c0,-0.445 0.361,-0.806 0.806,-0.806Z" /></svg>
            </nuxt-link>

            <nuxt-link :to="'/'">
             <svg id="linkedin" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="LinkedIn_3_" d="M15.785,9.249l0,5.834l-3.385,0l0,-5.446c0,-1.37 -0.488,-2.3 -1.712,-2.3c-0.937,0 -1.489,0.63 -1.736,1.236c-0.089,0.219 -0.116,0.524 -0.116,0.826l0,5.684l-3.381,0c0,0 0.045,-9.222 0,-10.177l3.382,0l0,1.443c-0.005,0.012 -0.014,0.022 -0.019,0.035l0.019,0l0,-0.035c0.452,-0.693 1.252,-1.681 3.05,-1.681c2.231,0 3.898,1.454 3.898,4.581Zm-13.87,-9.249c-1.157,0 -1.915,0.759 -1.915,1.76c0,0.974 0.735,1.759 1.871,1.759l0.021,0c1.182,0 1.915,-0.785 1.915,-1.759c-0.023,-1.001 -0.733,-1.76 -1.892,-1.76Zm-1.713,15.083l3.383,0l0,-10.177l-3.383,0l0,10.177Z"/></svg>
            </nuxt-link>

            <nuxt-link :to="'/'">
                <svg id="twitter" viewBox="0 0 24 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Twitter-Icon" serif:id="Twitter Icon" d="M21.53,4.984c0.009,0.216 0.012,0.434 0.012,0.653c0,6.675 -4.949,14.373 -13.999,14.373c-2.78,0 -5.365,-0.835 -7.543,-2.271c0.385,0.048 0.776,0.07 1.173,0.07c2.305,0 4.427,-0.806 6.112,-2.163c-2.153,-0.037 -3.971,-1.499 -4.598,-3.506c0.301,0.06 0.611,0.092 0.928,0.092c0.447,0 0.881,-0.063 1.297,-0.178c-2.253,-0.465 -3.95,-2.507 -3.95,-4.952c0,-0.026 0,-0.045 0,-0.064c0.664,0.376 1.424,0.605 2.231,0.631c-1.322,-0.908 -2.191,-2.453 -2.191,-4.204c0,-0.927 0.242,-1.793 0.667,-2.541c2.427,3.057 6.054,5.066 10.143,5.28c-0.084,-0.37 -0.127,-0.759 -0.127,-1.153c0,-2.79 2.203,-5.051 4.921,-5.051c1.414,0 2.693,0.614 3.59,1.595c1.122,-0.226 2.174,-0.646 3.127,-1.225c-0.369,1.177 -1.148,2.168 -2.166,2.792c0.996,-0.118 1.946,-0.391 2.827,-0.793c-0.661,1.013 -1.493,1.901 -2.454,2.615Z"/></svg>
            </nuxt-link>

            <nuxt-link :to="'/'">
                <svg id="facebook" viewBox="0 0 15 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="Facebook-Icon" serif:id="Facebook Icon" d="M4.15,24.006l0,-10.982l-4.15,0l0,-4.195l4.151,0l0,-3.175c0,-3.649 2.469,-5.654 6.124,-5.654c1.751,0 3.287,0.106 3.725,0.158l0,3.871l-2.595,-0.001c-1.987,0 -2.359,0.842 -2.359,2.076l0,2.725l4.756,0l-0.617,4.195l-4.139,0l0,10.982l-4.896,0Z"/></svg>
            </nuxt-link>


        </div>
    </footer>
</template>


<script>

import Logo from '~/components/Logo'

export default {
    name: 'FooterBlock',
    components: {
        'logo': Logo
    }
}
</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


#Footer
    // border-top solid 1px $line
    // margin 0 10%
    background-color #fff
    padding 2em


.footer__logo
    opacity .2

.footer__socials
    display flex
    align-items center
    justify-content flex-end
    a
        display block
    svg
        width 1em
        height @width
        margin-left 2em
        opacity .2
        transition opacity 250ms ease-out

        &:hover
            opacity 1


.footer--dark
    // border-top-color alpha($white, .1) !important
    .footer__socials svg
        fill $white
</style>
