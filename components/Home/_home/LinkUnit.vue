<template>
    <nuxt-link :to="to" class="_button _clickable">
        <slot />
    </nuxt-link>
</template>


<script>
export default {
    name: 'LinkUnit',
    props: ['to']
}
</script>

