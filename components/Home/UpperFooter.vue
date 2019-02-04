<template>
    <section
        id="UpperFooter"
        class="upperfooter _content"
        :class="{'upperfooter--dark': $store.state.theme.dark}">


        <h3>{{ blok.title }}</h3>
        <div class="upperfooter__list">
            <p v-for="content in blok.body" :key="content._uid">{{ content.text }}</p>
        </div>


    </section>
</template>


<script>

export default {
    name: 'UpperFooter',
    props: ['blok']

}
</script>



<style lang="stylus">

@import '~assets/stylus/variables'

#UpperFooter
    display flex
    align-content flex-start
    padding $spacing-flex 4em

    h3
        flex-grow 0
        flex-shrink 0
        width 20%
        min-width 10em
        font-size 1.6em
        font-weight 400 !important

    @media screen and (max-width: 760px)
        flex-direction column
        padding $spacing-flex-mb 2em
        h3
            width 100%
            margin 0 0 2em 2rem
        .upperfooter__list
            p
                padding 1.4em 2rem

.upperfooter__list
    flex-grow 1
    flex-shrink 0
    p
        border-bottom solid 1px alpha(#000, .1)
        padding 2rem
        font-family 'Muli', sans-serif

        &:first-of-type
            padding-top 0


.upperfooter--dark
    color $white
    *
        color $white

    p
        border-bottom solid 1px alpha(#fff, .1) !important

</style>
