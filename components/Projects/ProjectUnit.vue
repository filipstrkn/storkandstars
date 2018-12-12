<template>
    <article class="project-unit">
        <h3>HumanCall</h3>

        <image-loader />

    </article>
</template>


<script>

import ImageLoader from '~/components/Loaders/ImageLoader'

export default {
    name: 'ProjectUnit',
    component: {
        'image-loader': ImageLoader
    }
}
</script>



<style lang="stylus">

</style>

