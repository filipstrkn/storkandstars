<template>
    <main id="Page" v-editable="blok">
        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component">
        </component>
    </main>
</template>


<script>
export default {
    name: 'Page',
    props: ['blok']
}
</script>
