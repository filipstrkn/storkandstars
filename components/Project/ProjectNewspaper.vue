<template>
    <section id="ProjectNewsletter">

        <div class="newletter__content">

            <div class="title">
                <h1>{{ blok.title }}</h1>

            </div>
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
    padding 0 5% 6% 5em
    max-width 40em
    margin 0 auto


    .title
        position absolute
        transform rotate(90deg)
        left 0
        top 0
        margin 0
        // height 1rem
        width 1em
        white-space nowrap

    // .columns


.newletter__content
    display block
    margin 0 auto

</style>
