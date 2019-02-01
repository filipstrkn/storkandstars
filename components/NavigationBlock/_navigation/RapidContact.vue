<template>
    <div id="RapidContact" :class="{ 'rocket-contact--dark': $store.state.theme.dark }">
        <rocket-button />
        <span class="infobox">Napiš nám na Slack</span>
    </div>
</template>


<script>

import RocketButton from './RocketButton'

export default {
    name: 'RapidContact',
    components: {
        'rocket-button': RocketButton
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#RapidContact
    position fixed
    bottom 1em
    z-index 102
    left 1em

    .infobox
        display none
        position absolute
        top 50%
        left 5em
        white-space nowrap
        text-align right
        transform translateY(-50%)
        background-color $white - 15
        color alpha($black, .75)
        font-family $font
        font-size .9em
        letter-spacing .05em
        padding .3em .6em
        border-radius 30em


    &:hover .infobox
        display block


    &.rocket-contact--dark .infobox
        background-color $black + 30
        color $white

@media screen and (max-width: 760px)
    #RapidContact
        display none

</style>
