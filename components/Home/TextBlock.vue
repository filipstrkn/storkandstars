<template>
    <section>



        <div class="_container--center _text--medium" data-visible="false">
            <h3 v-if="blok.pre_title">{{ blok.pre_title }}</h3>
            <div class="_text" v-html="message"></div>
            <h3 v-if="blok.post_title">{{ blok.post_title }}</h3>
        </div>



    </section>
</template>



<script>

import isVisible from '~/mixins/isVisible'
import ServiceUnit from '~/components/Home/_home/ServiceUnit'
import marked from 'marked'


export default {
    name: 'TextBlock',
    props: ['blok'],
    mixins: [isVisible],
    computed: {
        message() {
            return marked(this.blok.text)
        }
    }
}

</script>



<style lang="stylus" scoped>


@import '~assets/stylus/variables'


._text
    transition line-height $appear ease-out

[data-visible="false"]
    opacity 0
    transform translateY(6rem)
    transition opacity $appear ease-in, transform $appear ease-in

    ._text
        line-height 3em

[data-visible="true"]
    opacity 1
    transform translateY(0)
    transition opacity $appear ease-out, transform $appear ease-out




</style>
