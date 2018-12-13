<template>
    <section class="_container--center _text--medium">
        <div>
            <h3 v-if="blok.pre_title">{{ blok.pre_title }}</h3>
            <div class="_text" v-html="message"></div>
            <h3 v-if="blok.post_title">{{ blok.post_title }}</h3>
        </div>
    </section>
</template>



<script>

import ServiceUnit from '~/components/Home/_home/ServiceUnit'
import marked from 'marked'

export default {
    name: 'TextBlock',
    props: ['blok'],
    computed: {
        message() {
            return marked(this.blok.text)
        }
    }
}

</script>
