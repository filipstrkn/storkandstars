<template>
    <div>
        <div id="RocketIcon" :class="{ 'rocket-icon--dark': $store.state.theme.dark }">

            <svg viewBox="0 0 24 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <path id="RocketBody" d="M12.225,0.101c-0.232,-0.135 -0.518,-0.135 -0.75,0c-2.295,1.327 -4.221,3.237 -5.568,5.522c-0.21,0.356 -0.403,0.721 -0.583,1.092c-0.018,0.031 -0.033,0.062 -0.046,0.095c-0.976,2.049 -1.49,4.302 -1.493,6.592l0,0.021c0,0.01 0.001,0.02 0.001,0.029c0.001,0.009 0,0.019 0.001,0.028l0.266,3.511c-2.581,2.524 -4.053,6.014 -4.053,9.631c0,1.176 0.152,2.343 0.451,3.467c0.06,0.227 0.223,0.412 0.441,0.501c0.217,0.089 0.464,0.07 0.665,-0.05l3.694,-2.194l13.199,-0.001l3.694,2.195c0.202,0.12 0.448,0.139 0.666,0.05c0.093,-0.038 0.177,-0.094 0.246,-0.164c0.092,-0.092 0.16,-0.208 0.195,-0.337c0.299,-1.125 0.45,-2.291 0.45,-3.467c0,-3.618 -1.473,-7.107 -4.053,-9.632l0.266,-3.51c0.001,-0.009 0,-0.018 0.001,-0.027c0,-0.01 0.001,-0.02 0.001,-0.03c0,-0.006 0,-0.012 0,-0.018c0,-0.001 0,-0.002 0,-0.003c-0.003,-2.29 -0.517,-4.543 -1.493,-6.592c-0.013,-0.033 -0.029,-0.065 -0.046,-0.095c-0.18,-0.371 -0.373,-0.736 -0.583,-1.092c-1.347,-2.285 -3.273,-4.195 -5.569,-5.522Zm9.978,26.521c0,0.708 -0.062,1.411 -0.184,2.102l-3.119,-1.854l0.593,-7.831c1.737,2.126 2.71,4.812 2.71,7.583Zm-3.786,-13.221l-0.994,13.127l-11.145,0l-0.703,-9.274c0,-0.008 -0.001,-0.017 -0.002,-0.026l-0.289,-3.827c0.003,-1.925 0.406,-3.821 1.172,-5.566l10.788,0.001c0.767,1.744 1.17,3.64 1.173,5.565Zm-6.567,-2.42c-1.234,0 -2.394,0.48 -3.266,1.353c-0.873,0.872 -1.353,2.032 -1.353,3.266c0,1.234 0.48,2.394 1.353,3.267c0.872,0.872 2.032,1.353 3.266,1.353c1.234,0 2.394,-0.481 3.267,-1.353c0.872,-0.873 1.353,-2.033 1.353,-3.267c0,-2.547 -2.073,-4.619 -4.62,-4.619Zm3.121,4.619c0,0.834 -0.324,1.618 -0.914,2.207c-0.589,0.59 -1.373,0.914 -2.207,0.914c-0.834,0 -1.617,-0.324 -2.207,-0.914c-0.589,-0.589 -0.914,-1.373 -0.914,-2.207c0,-0.833 0.325,-1.617 0.914,-2.207c0.59,-0.589 1.373,-0.914 2.207,-0.914c1.721,0 3.121,1.4 3.121,3.121Zm-13.289,13.124c-0.122,-0.691 -0.184,-1.394 -0.184,-2.102c0,-2.771 0.973,-5.456 2.71,-7.582l0.593,7.83l-3.119,1.854Zm14.793,-22.387l-9.249,0c1.14,-1.917 2.732,-3.539 4.624,-4.715c1.893,1.176 3.484,2.798 4.625,4.715Z"/></svg>

            <div id="Fire">
                <span id="Fire1"></span>
                <span id="Fire2"></span>
                <span id="Fire3"></span>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    name: 'RocketIcon'
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#RocketIcon
    position relative
    margin-top 4px
    transform rotate(36deg)
    svg
        width 18px
        fill $black


#Fire
    position absolute
    bottom 4px
    height 6px
    width 7px
    left 6px
    display flex
    justify-content space-between

#Fire1,
#Fire2,
#Fire3
    position relative
    width 1px
    height 100%
    background-color $black

#Fire1
    height 3px
    animation: flame1 1s ease-in-out infinite
#Fire2
    height 8px
    animation: flame2 1s ease-in-out infinite
#Fire3
    height 4px
    animation: flame3 1s ease-in-out infinite



@keyframes flame1
    0%
        height 3px
    60%
        height 5px
    100%
        height 3px
@keyframes flame2
    0%
        height 8px
    60%
        height 4px
    100%
        height 8px
@keyframes flame3
    0%
        height 4px
    60%
        height 6px
    100%
        height 4px



.rocket-icon--dark
    svg
        fill $white !important
    #Fire span
        background-color $white

</style>





