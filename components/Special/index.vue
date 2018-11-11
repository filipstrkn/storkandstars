<template>
    <section id="Special">
        <nuxt-link :to="blok.link_to.cached_url">
            <div class="special" v-editable="blok">
                <h3 :style="textColor">{{ blok.title }}</h3>
                <div class="special__content"></div>
            </div>
        </nuxt-link>
    </section>
</template>



<script>
export default {
    name: 'Special',
    props: ['blok'],
    computed: {

        // Basic controll if the value is HEX via RegEx.
        textColor() {
            const reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
            if ( reg.test(this.blok.title_color) ) return {'color' : this.blok.title_color}
            else return {}

        }
    }
}
</script>


<style lang="stylus">

$duration = 350ms

#Special
    display inline-block
    vertical-align top

.special
    width 70vh
    height calc(90vh - 5em)
    // margin-right 5em
    position relative

    h3
        position absolute
        margin 0
        top 5%
        left 5%
        z-index 2
        transition color $duration ease-in-out

     &:hover
        cursor pointer
        h3
            color #fb116e !important
        .special__content::after
            opacity 1

.special__content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 100%
    height 100%
    background-color #b1e8ff
    z-index 1
    background-image url(https://i.pinimg.com/564x/13/5e/c2/135ec272b78264041ee53d87de4e4be2.jpg)
    background-position center
    background-size 100%
    transition all $duration ease-in-out

    &::after
        content ""
        opacity 0
        position absolute
        width 100%
        height 100%
        top 0
        left 0
        background-color alpha(#fff, .65)
        transition all $duration ease-in-out


</style>


