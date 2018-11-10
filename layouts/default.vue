<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="stylus">


html
  // font-family: 'Source Sans Pro', sans-serif
  font-family: 'Karma', serif
  font-style: normal
  color #333333
  font-style: normal
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

a
  text-decoration none
  color inherit

*, *:before, *:after
  box-sizing: border-box
  margin: 0


.button--green
  display: inline-block
  border-radius: 4px
  border: 1px solid #3b8070
  color: #3b8070
  text-decoration: none
  padding: 10px 30px


.button--green:hover
  color: #fff
  background-color: #3b8070


.button--grey
  display: inline-block
  border-radius: 4px
  border: 1px solid #35495e
  color: #35495e
  text-decoration: none
  padding: 10px 30px
  margin-left: 15px


.button--grey:hover
  color: #fff
  background-color: #35495e


h1, h2, h3, h4
  font-family: 'Source Sans Pro', sans-serif


.link
  font-weight 400
  font-size 1rem
  font-family: 'Karma', serif
  font-style normal
  position relative
  z-index 2
  &::before
    content "+"
    display inline-block
    font-weight bold
    margin-right .5em
  &::after
    content ""
    position absolute
    left -5%
    top -20%
    height 100% + (-@top)
    width 0
    background-color alpha(#000, .046)
    transition width 250ms ease-in-out

  &:hover::after
    width 140%



</style>

