<template>
    <section id="ProjectParagraph">



        <component :is="dynamicParagraph" :content="blok" v-editable="blok" />



    </section>
</template>



<script>

import ParagraphRight from './ParagraphComponents/ParagraphRight'
import ParagraphLeft from './ParagraphComponents/ParagraphLeft'
import ParagraphQuote from './ParagraphComponents/ParagraphQuote'


export default {
    name: 'ProjectParagraph',
    props: ['blok'],
    components: {
        'paragraph-right': ParagraphRight,
        'paragraph-left': ParagraphLeft,
        'paragraph-quote': ParagraphQuote
    },
    computed: {
        dynamicParagraph() {
            switch(this.blok.type) {
                case 'left':
                    return 'paragraph-left';
                case 'right':
                    return 'paragraph-right';
                case 'quote':
                    return 'paragraph-quote';
                case 'duplo':
                    return 'paragraph-right';

                default:
                    return 'paragraph-left';
            }
        }
    }
}
</script>



<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#ProjectParagraph
    max-width 100em
    margin 0 auto
    padding: $spacing-flex 2rem

</style>

