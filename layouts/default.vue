<template>
  <div @mousemove="launchFollower">
    <nuxt/>
    <follower></follower>
  </div>
</template>


<script>

import Follower from '~/components/Draggable/_draggable/Follower'

export default {
  components: {
    'follower': Follower
  },
  methods: {
     launchFollower(e) {
          const left = e.clientX || e.pageX
          const top = e.clientY || e.pageY
          const clickable = e.target.classList.contains('_clickable') ? true : false
          setTimeout(() => {
            this.$store.commit('setFollower', { clickable, position: {top: top, left} })
            // this.$store.commit('setFollower', { position: {top: top, left} })
          }, 20)
      }
  }
}
</script>



<style lang="stylus">

@import '~assets/stylus/reset'
@import '~assets/stylus/common'
@import '~assets/stylus/variables'

html
  font-style: normal
  font-style: normal
  font-size: 14px
  user-select none
  font-family $main-font
  // cursor default
  cursor url("~assets/prpl.png") 5 5, auto
  // background-color #0d0d0d
  // scroll-behavior smooth

  // *
  //   cursor url("~assets/cursor.png") 5 5, auto

  // &._clickable
    // cursor none !important
  // *
    // cursor none

  // -webkit-font-smoothing: antialiased
	// -moz-osx-font-smoothing: grayscale

  img
    pointer-events none !important


// h1, h2, h3, h4
//     font-family: 'Source Sans Pro', sans-serif


</style>

