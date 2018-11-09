<template>
    <article id="HorizontalContent" v-editable="blok">

        <component
            :key="blok._uid"
            v-for="blok in blok.content"
            :blok="blok"
            :is="blok.component">
        </component>

    </article>
</template>


<script>
export default {
    name: 'HorizontalContent',
    props: ['blok']
}
</script>


<style lang="stylus">

#HorizontalContent
    white-space nowrap
    & > *
        display inline-block

</style>


