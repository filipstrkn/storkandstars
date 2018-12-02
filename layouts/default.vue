<template>
  <div @mousemove="launchFollower">
    <header-block />
    <nuxt/>
    <follower></follower>
  </div>
</template>


<script>


import HeaderBlock from '~/components/HeaderBlock'
import Follower from '~/components/Draggable/_draggable/Follower'


export default {
  components: {
    'header-block': HeaderBlock,
    'follower': Follower
  },
  methods: {
     launchFollower(e) {
          const left = e.clientX || e.pageX
          const top = e.clientY || e.pageY
          const clickable = e.target.classList.contains('_clickable') ? true : false
          this.$store.commit('setFollower', { clickable, position: {top, left} })
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
  cursor url("~assets/pointer.png") 3 3, auto

  *
    cursor url("~assets/pointer.png") 3 3, auto
    // cursor none

  // *
    // cursor none

  // -webkit-font-smoothing: antialiased
	// -moz-osx-font-smoothing: grayscale

  img
    pointer-events none !important


// h1, h2, h3, h4
//     font-family: 'Source Sans Pro', sans-serif



</style>

