<template>
    <section id="ProjectNewsletter" class="_container">

        <div class="columns">
            <component
                :key="blok._uid"
                v-for="blok in blok.columns"
                :blok="blok"
                :is="blok.component">
            </component>
        </div>

    </section>
</template>



<script>
export default {
    name: 'ProjectNewsletter',
    props: ['blok']
}
</script>



<style lang="stylus" scoped>


#ProjectNewsletter
    padding 10% 0


.columns
    margin 0 auto
    max-width 80em
    & > *
        display inline-block
        width 50%

</style>
