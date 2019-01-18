<template>
  <div @mousemove="launchFollower">
    <no-ssr>
      <navigation-block />
        <nuxt/>
      <follower />
    </no-ssr>
  </div>
</template>


<script>

import Follower from '~/components/Draggable/_draggable/Follower'
import NavigationBlock from '~/components/NavigationBlock'

export default {
  scrollToTop: false,
  components: {
    'follower': Follower,
    'navigation-block': NavigationBlock,
  },
  methods: {
     launchFollower(e) {
          const left = e.clientX || e.pageX
          const top = e.clientY || e.pageY
          const clickable = e.target.classList.contains('_clickable') ? true : false
          setTimeout(() => {
            this.$store.commit('setFollower', { clickable, position: {top: top, left} })
          }, 20)
      }
  }
}
</script>



<style lang="stylus">

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:100,300,300i,400,500,600,700')

@import '~assets/stylus/reset'
@import '~assets/stylus/common'
@import '~assets/stylus/variables'

html
  font-style: normal
  font-style: normal
  font-size: 15px
  user-select none
  font-family $main-font
  color $black
  cursor url("~assets/cursor.png") 5 5, auto

  img
    pointer-events none !important

</style>

