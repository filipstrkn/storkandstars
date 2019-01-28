<template>

    <nuxt/>

</template>


<script>
export default {
    name: 'Wrapper',
    mounted() {
        this.$nextTick(
            this.$store.commit('setLoading', {pageReady: true})
        )
    }
}
</script>

