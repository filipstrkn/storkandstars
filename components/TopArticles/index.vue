<template>
    <section>
        <div id="TopArticles">
            <block :ctx="content" v-editable="blok"></block>
            <component
                :key="blok._uid"
                v-for="blok in blok.articles"
                v-editable="blok"
                :blok="blok"
                :is="blok.component">
            </component>
        </div>
    </section>
</template>



<script>

// import post from '../Post'
import block from '../Block'
// import setWidthOfElement from '~/mixins/setWidthOfElement'


export default {
    name: 'TopArticles',
    data() {
        return {
            content: {
                title: this.blok.title,
                description: this.blok.description,
                link: {
                    name: this.blok.link_name,
                    to: this.blok.link_to.cached_url
                }
            }
        }
    },
    props: ['blok'],
    // mixins: [setWidthOfElement],
    components: { block }
}
</script>



<style lang="stylus">
#TopArticles
    & > *
        display inline-block
        vertical-align top
</style>


