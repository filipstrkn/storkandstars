<template>
    <main id="Page" v-editable="blok" :class="{'DARK': blok.dark_mode}">
        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>
    </main>
</template>


<script>
export default {
    name: 'Page',
    props: ['blok']
}
</script>


<style lang="stylus">
@import '../assets/stylus/variables'

#Page
    min-height 100%
    color: #4b4e58


#Page.DARK
    background-color: $black
    color: $white

</style>

