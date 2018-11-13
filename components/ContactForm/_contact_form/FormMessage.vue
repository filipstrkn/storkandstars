<template>
    <div id="FormMessage">
        <h1 v-if="$store.getters.isMessageSent">{{ message.success }}</h1>
        <h1 v-else>{{ message.fail }}</h1>
    </div>
</template>


<script>
export default {
    name: 'FormMessage',
    props: ['message']
}
</script>


<style lang="stylus">

#FormMessage
    background-color #c9ffcb
    padding 2rem 4rem

</style>


