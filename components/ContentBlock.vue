<template>
    <section class="content-block" :class="`content--${blok.theme}`">
        <header-block />
        <main class="content">
            <component
                :key="blok._uid"
                v-for="blok in blok.body"
                :blok="blok"
                :is="blok.component">
            </component>
        </main>
        <side-link v-if="blok.link_name" :link="{name: blok.link_name, to: blok.link_to}" />
    </section>
</template>



<script>

import HeaderBlock from '~/components/HeaderBlock'
import SideLink from '~/components/Home/_home/SideLink'

export default {
    name: 'ContentBlock',
    props: ['blok'],
    components: {
        'header-block': HeaderBlock
    }
}
</script>



<style lang="stylus">


.content-block
    overflow hidden


</style>

