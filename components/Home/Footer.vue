<template>
    <footer class="_container--large _text--medium">
        <div class="">
            <h3 v-if="blok.pre_title">{{ blok.pre_title }}</h3>
            <p>{{ blok.message }}</p>
            <h3 v-if="blok.post_title">{{ blok.post_title }}</h3>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'FooterBlock',
    props: ['blok']
}
</script>



<style lang="stylus">


footer
    padding 10% 2rem
    margin-left 10%


</style>
