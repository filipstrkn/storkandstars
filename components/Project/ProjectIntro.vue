<template>
    <section id="ProjectIntro" class="_container">



        <div class="title_container">
            <transition name="fade-late">
                <h1 class="brand">{{ blok.brand }}</h1>
            </transition>
            <h1 class="title">{{ blok.brand }}</h1>
            <h1 class="subtitle">{{ blok.subtitle }}</h1>
        </div>


        <!-- <div class="image">
            <img :src="blok.attachment">
        </div> -->


        <image-loader
            class="attachment"
            :image="'https:' + blok.attachment"/>


        <p>{{ blok.prefix }}</p>



    </section>
</template>



<script>


import ImageLoader from '~/components/Loaders/ImageLoader'


export default {
    name: 'ProjectIntro',
    props: ['blok'],
    components: {
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus">


@import '~assets/stylus/variables'
@import '~assets/stylus/mixins'


#ProjectIntro
    padding-top 5em
    // padding-bottom 2rem
    border-bottom solid 1px $grey--light
    .title_container
        position relative
        padding 20% 0 5% 0
        // padding 16% 5% 5% 16%
        h1
            font-size 3rem
            // font-size calc(1rem + 3 * (100vw / 200))
            font-size calc(1rem + 5 * (100vw / 400))
            font-weight 300
            line-height 1.4em

        .brand
            position absolute
            font-size 20vw
            color alpha($black, .03)
            top 50%
            left 0
            transform translate(-50%, -50%)
            margin 0
            font-weight 900

        .title
            font-weight 600
        // .subtitle
        //     color alpha($black, .6)

    .attachment
        position relative
        width 90%
        // max-width 40em
        // margin 0 0 0 auto
        // margin-right 16%
        margin-left auto
        height 0
        // height 60vh
        width 60%
        // height $thumb-size
        padding-bottom 60%
        overflow hidden
        *
            absolute-centering()
            width 100%

    p
        max-width 30em
        width 100%
        font-size 1.5rem
        font-weight 300
        padding 10% 0
        // padding 5em 0
        line-height 1.6
        margin-right auto
        // margin-left 16%
        margin-bottom 0
        color alpha($black, .45)


</style>

