<template>
    <section id="TextBlock">



        <div class="_container--center _text--medium" data-visible="false">
            <!-- <h3 v-if="blok.pre_title" class="_subtitle">{{ blok.pre_title }}</h3> -->
            <div class="_text" v-html="message"></div>
            <!-- <h3 v-if="blok.post_title" class="_subtitle">{{ blok.post_title }}</h3> -->
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

#TextBlock
    padding 12% 0

// ._text
    // transition line-height $appear ease-out
    // font-family $serif
    // font-weight 300
    // font-weight 700

[data-visible="false"]
    opacity 0
    transform translateY(6rem)
    transition opacity $appear ease-in, transform $appear ease-in

    ._text
        line-height 3

[data-visible="true"]
    opacity 1
    transform translateY(0)
    transition opacity $appear ease-out, transform $appear ease-out




</style>
