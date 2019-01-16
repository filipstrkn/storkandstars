<template>
    <nuxt-link :to="to" id="Button" class="_button _clickable">
        <!-- slot name = icon -->
        <div id="Icon" v-if="$slots.icon">
            <slot id="Icon" name="icon" />
        </div>

        <span id="Text">
            <slot />
        </span>
    </nuxt-link>
</template>


<script>
export default {
    name: 'LinkUnit',
    props: ['to']
}
</script>


<style lang="stylus" scoped>

#Button
    display flex
    align-items center
    justify-content center

#Icon
    width 18px
    margin-right 1em

</style>
