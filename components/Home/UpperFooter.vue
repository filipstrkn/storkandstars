<template>
    <nuxt-link v-if="blok.link_to.cached_url" :to="blok.link_to.cached_url">

        <section id="UpperFooter">
            <div class="_content">
                <p class="_text--medium">{{ blok.title }}</p>
            </div>
        </section>

    </nuxt-link>
</template>


<script>
export default {
    name: 'UpperFooter',
    props: ['blok']
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#UpperFooter
    padding $spacing-flex 0
    margin-top $spacing-flex
    &:hover
        background-color alpha(#000, .03)


    p
        text-align center


</style>
