<template>
    <div @mousemove="launchFollower">

        <preloader />
        <navigation-block/>
        <wrapper v-show="!$store.state.loading.preloading" />
        <follower/>

    </div>
</template>


<script>
import Wrapper from "~/components/"
import Follower from "~/components/Draggable/_draggable/Follower"
import NavigationBlock from "~/components/NavigationBlock"
import Preloader from "~/components/Loading/Preloader"

export default {
    scrollToTop: false,
    components: {
        follower: Follower,
        "navigation-block": NavigationBlock,
        "preloader": Preloader,
        'wrapper': Wrapper
    },
    methods: {
        launchFollower(e) {
            const left = e.clientX || e.pageX;
            const top = e.clientY || e.pageY;
            const clickable = e.target.classList.contains("_clickable") ? true : false

            this.$store.commit("setFollower", {
                clickable,
                position: { top: top, left }
            });

        }
    }
}
</script>



<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:100,300,300i,400,500,600,700')
@import url('https://fonts.googleapis.com/css?family=Mukta:300,400,500,600,700,800|Muli:400,400i,600,600i,700,700i,800,900&amp;subset=latin-ext')
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700,800,900&amp;subset=latin-ext')
@import url('https://fonts.googleapis.com/css?family=Cabin:400,500,600&amp;subset=latin-ext')
@import url('https://fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500,600,700|Noto+Serif+JP:300,400,500,600,700&amp;subset=latin-ext')
@import url('https://fonts.googleapis.com/css?family=Mukta+Malar:400,500,600,700,800&amp;subset=latin-ext')
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&amp;subset=latin-ext')
@import '~assets/stylus/reset'
@import '~assets/stylus/common'
@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'

html
  font-style normal
  font-size 15px
  font-size 14px
  user-select none
  font-family $main-font
  color $black

  img
    pointer-events none !important

</style>

