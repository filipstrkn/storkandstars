<template>
    <section id="ProjectParagraph">


        <h1>{{ blok.title }}</h1>
        <h1>{{ blok.subtitle }}</h1>

        <p>{{ blok.text }}</p>


    </section>
</template>



<script>
export default {
    name: 'ProjectParagraph',
    props: ['blok']
}
</script>
