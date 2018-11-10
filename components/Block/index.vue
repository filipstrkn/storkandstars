<template>
    <div class="block" v-editable="blok">
        <div>
            <h3>{{ blok.title }}</h3>
            <p>{{ blok.description }}</p>
            <a href="" class="link">{{ blok.link_name }}</a>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Block',
    props: ['blok']
}
</script>



<style lang="stylus">

.block
    margin 0 2.4rem 0 6em
    max-width 18rem
    vertical-align top

    h3
        font-size 1.8rem
        margin-bottom 1.6rem

    p
        white-space pre-wrap
        margin-bottom 3rem
        color alpha(#000, .6)

</style>


