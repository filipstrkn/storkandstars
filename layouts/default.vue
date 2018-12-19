<template>
  <div @mousemove="launchFollower">
    <header-block />
    <nuxt/>
    <follower></follower>
  </div>
</template>


<script>

import Follower from '~/components/Draggable/_draggable/Follower'
import HeaderBlock from '~/components/HeaderBlock'

export default {
  components: {
    'follower': Follower,
    'header-block': HeaderBlock
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

@import '~assets/stylus/reset'
@import '~assets/stylus/common'
@import '~assets/stylus/variables'

html
  font-style: normal
  font-style: normal
  font-size: 14px
  user-select none
  font-family $main-font
  cursor url("~assets/prpl.png") 5 5, auto

  img
    pointer-events none !important

</style>

