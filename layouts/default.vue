<template>
    <div>

        <preloader />
        <navigation-block/>
        <rapid-contact />
        <wrapper v-show="!$store.state.loading.preloading" />

    </div>
</template>


<script>
import Wrapper from "~/components/"
import NavigationBlock from "~/components/NavigationBlock"
import Preloader from "~/components/Loadings/Preloader"
import RapidContact from "~/components/NavigationBlock/_navigation/RapidContact"

export default {
    scrollToTop: false,
    components: {
        "navigation-block": NavigationBlock,
        "preloader": Preloader,
        'wrapper': Wrapper,
        'rapid-contact': RapidContact
    }
}
</script>



<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Cabin:400,500,600|Muli:400,400i,600,600i,700,700i,800,900|Libre+Baskerville&amp;subset=latin-ext')
@import '~assets/stylus/reset'
@import '~assets/stylus/common'
@import '~assets/stylus/variables'

html
  font-style normal
  font-size 16px
  user-select none
  font-family $font
  color $black

  @media screen and (max-width: 760px)
    font-size 15px

</style>

