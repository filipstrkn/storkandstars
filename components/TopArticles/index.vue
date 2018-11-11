<template>
    <section id="TopArticles" v-editable="blok">
        <block :ctx="content"></block>
        <post
            v-for="post in posts"
            :key="post._uid"
            :post="post">
        </post>
    </section>
</template>



<script>

import post from '../Post'
import block from '../Block'

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
    components: {
        post,
        block
    },
    computed: {
        posts() {
            return 2
        }
    }
}
</script>



<style lang="stylus">
#TopArticles
    & > *
        display inline-block
        vertical-align top
</style>


