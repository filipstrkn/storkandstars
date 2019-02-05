<template>
    <section id="ProjectNewsletter" class="_container">

        <div class="columns">

            <masonry
                :columnClass="['column']"
                :cols="{default: 2, 550: 1}"
                :gutter="{
                    default: '7em',
                    800: 40
                }">

                <component
                    class="column__unit"
                    :key="blok._uid"
                    v-for="blok in blok.columns"
                    :blok="blok"
                    :is="blok.component">
                </component>

            </masonry>

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

@import '~assets/stylus/variables'

#ProjectNewsletter
    padding $spacing-flex 0


.columns
    max-width 60em
    margin 0 auto -4em auto
    // background-color grey
    text-align center
    // margin 0 auto
    // text-align center
    // // padding 0 10%
    // max-width 80em
    // & > *
    //     background-color blue
    //     display inline-block
    //     width 46%
    //     text-align left

.column__unit
    max-width 26em
    margin-bottom $spacing-flex
    // background-color blue
    text-align left

</style>
