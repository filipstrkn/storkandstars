<template>
    <section id="ProjectNewsletter" class="_container">

        <div class="newletter__content">

            <!-- <div class="title">
                <h1>{{ blok.title }}</h1>

            </div> -->
            <!-- <h1>{{ blok.subtitle }}</h1> -->


            <div class="columns">
                <component
                    :key="blok._uid"
                    v-for="blok in blok.columns"
                    :blok="blok"
                    :is="blok.component">
                </component>
            </div>

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
    position relative
    // padding 0 5% 6% 5em
    // max-width 40em
    margin 0 auto
    margin 0 0 0 auto

    padding-top 5%
    padding-bottom 5%
    display flex


    .title
        // position absolute
        transform rotate(90deg)
        left 0
        top 0
        margin 0
        // height 1rem
        width 1rem
        height 0
        margin-right 2em
        // width 0
        white-space nowrap

    // .columns


.newletter__content
    display block
    // margin 0 auto
    // margin-left 2em
    margin 0 0 0 auto
    padding-left 20%


    .columns
        & > *
            display inline-block
            // max-width 20em
            width 50%
            // margin 0 5% 10% 5%

</style>
