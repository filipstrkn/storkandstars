<template>
    <section id="ProjectList" class="container--hr">
        <h1>I am a project list with filters</h1>
        <!-- <thumb v-for="thumb in blok.projects"></thumb> -->
    </section>
</template>



<script>

import thumb from './Thumb'


export default {
    name: 'ProjectList',
    props: ['blok'],
    components: {
        thumb
    }
}
</script>



<style lang="stylus">

</style>


