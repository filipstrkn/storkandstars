<template>
    <h3>{{ service }}</h3>
    <!-- <h3><span>{{ order }}</span>{{ service }}</h3> -->
</template>


<script>
export default {
    name: 'ServiceUnit',
    props: ['index', 'service'],
    computed: {
        order() {
            return `0${this.index + 1}`
        }
    }
}
</script>

