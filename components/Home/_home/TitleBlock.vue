<template>
    <div class="title">
        <word-block v-for="(word, index) in words" :key="index" :word="word" :duration="duration" />
    </div>
</template>



<script>

import WordBlock from './WordBlock'

export default {
    name: 'TitleBlock',
    components: {
        'word-block': WordBlock
    },
    props: ['title', 'duration'],
    data() {
        return {
            words: []
        }
    },
    methods: {
        splitTitle() {
            this.words = this.title.split(' ')
        }
    },
    mounted() {
        this.splitTitle()
    }
}
</script>



<style lang="stylus" scoped>

.title
    overflow auto
    clear both
    float right
    display flex
    flex-wrap wrap

    p
        margin-right .3em

        &:last-of-type
            margin-right 0


</style>
