<template>
    <section id="Special">
        <nuxt-link :to="blok.link_to.cached_url">
            <div class="special" v-editable="blok">
                <h3 :style="textColor">{{ blok.title }}</h3>
                <div class="special__content" :style="attachment"></div>
            </div>
        </nuxt-link>
    </section>
</template>



<script>
export default {
    name: 'Special',
    props: ['blok'],
    computed: {
        attachment() {
            return {
                'background-image': `url(${this.blok.image})`
            }
        },
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

@import '../../assets/stylus/variables'
$duration = 350ms

#Special
    display inline-block
    vertical-align top

.special
    width $thumb-size
    height calc(90vh - 5em)
    position relative

    h3
        position absolute
        margin 0
        top 5%
        left 5%
        z-index 2
        transition color $duration ease-in-out



.special__content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 100%
    height 100%
    background-color $grey--lighter
    z-index 1
    background-position center
    background-size cover
    background-repeat no-repeat
    transition all $duration ease-in-out

</style>


