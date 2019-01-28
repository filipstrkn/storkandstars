<template>
    <div class="title">
        <div data-visible="false">
            <word-block
                v-for="(word, index) in words"
                :key="index"
                :word="word"
                :duration="duration"
                :launcher="launcher || visibleShown" />
        </div>
    </div>
</template>



<script>

// mixins
import isVisible from '~/mixins/isVisible'
// components
import WordBlock from './WordBlock'

export default {
    name: 'TitleBlock',
    mixins: [isVisible],
    components: {
        'word-block': WordBlock
    },
    props: ['title', 'duration', 'launcher'],
    data() {
        return {
            words: [],
            visibleOnce: true
        }
    },
    methods: {
        splitTitle() {
            this.words = this.title.split(' ')
        }
    },
    beforeMount() {
        this.splitTitle()
    }
}
</script>



<style lang="stylus" scoped>

.title
    display flex
    flex-wrap wrap

    p
        margin-right .3em

        &:last-of-type
            margin-right 0


</style>
