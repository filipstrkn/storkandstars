<template>
    <div class="thumb" v-editable="blok">
        <h3>HumanCall</h3>
        <div class="thumb__content"></div>
    </div>
</template>


<script>
export default {
    name: 'Thumb',
    props: ['blok'],
    data() {
        return {
            loading: false
        }
    },
    computed: {
        isLoading() {
            // loading logic
            return false
        }
    },
    components: {}
}
</script>



<style lang="stylus">

$duration = 350ms

.thumb
    width 60vh
    height calc(90vh - 5em)
    margin-right 5em
    position relative
    &:hover
        cursor pointer
        .thumb__content
            width 98%
            height @width
            background-size 110%

            &::after
                opacity 1
        h3
            // opacity 1
            color #ff1f64 !important


    h3
        // opacity 0
        position absolute
        margin 0
        top 5%
        left 5%
        // top 50%
        // left 50%
        // transform translate(-50%, -50%)
        transition all $duration ease-in-out
        z-index 2

.thumb__content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 100%
    height 100%
    background-color #b1e8ff
    z-index 1
    background-image url(https://i.pinimg.com/564x/5e/86/7c/5e867c34085496e5a61c8b514c1c6de0.jpg)
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


