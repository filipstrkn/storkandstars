<template>
    <main id="HorizontalPage" v-editable="blok">

        <header-block></header-block>

        <section class="horizontal__body">
            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                v-if="blok.component !== 'header_block'"
                :blok="blok"
                :is="blok.component">
            </component>
        </section>
    </main>
</template>



<script>

import HeaderBlock from './HeaderBlock'

export default {
    name: 'HorizontalPage',
    props: ['blok'],
    components: {
        'header-block' : HeaderBlock
    },
    // computed: {
    //     isHeader() {
    //         return this.blok.body.map(component => component.component === 'header_block')
    //     }
    // }
}
</script>



<style lang="stylus">
@import '../assets/stylus/variables'

#HorizontalPage
    min-height 100vh
    display flex
    flex-direction column

.horizontal__body
    box-sizing border-box
    flex-grow 1
    height 100%
    display flex
    align-items center
    overflow-x auto
    padding-top 5em
    // background #cdcdcd




</style>

