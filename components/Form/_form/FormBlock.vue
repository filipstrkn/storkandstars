<template>
    <form id="FormBlock">



        <!-- //////////////////////////////////////////////////////////////
            Step
        /////////////////////////////////////////////////////////////// -->
        <step
            v-for="(step, index) in steps"
            :key="index"
            v-show="index === $store.getters.currentStep"
            :step="step"
            :message="message"
            :submit="submit"/>



    </form>
</template>



<script>


import Step from './Step'
import FormButton from './FormButton'


export default {
    name: 'FormBlock',
    props: ['steps', 'message', 'submit'],
    components: {
        'step': Step,
        'form-button': FormButton
    },


    beforeMount() {
        this.$store.commit('setStepAmmount', this.steps.length)
    }


}
</script>