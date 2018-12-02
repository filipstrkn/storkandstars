<template>
    <section id="NewProjectForm" v-editable="blok">



        <!-- //////////////////////////////////////////////////////////////////
            Form Body
        /////////////////////////////////////////////////////////////////// -->
        <form-block
            v-if="!$store.getters.isMessageSent && !$store.state.contactForm.status"
            :steps="blok.steps"
            :submit="'sendProject'"
            :message="{submit: blok.submit}"
        />


        <!-- //////////////////////////////////////////////////////////////////
            Form Messages
        /////////////////////////////////////////////////////////////////// -->
        <!-- <form-message /> -->



    </section>
</template>



<script>

import FormBlock from './_form/FormBlock'
import FormMessage from './_form/FormMessage'



export default {
    name: 'NewProjectForm',
    props: ['blok', 'id'],
    components: {
        'form-block': FormBlock,
        'form-message': FormMessage
    }
}
</script>



<style lang="stylus">

#NewProjectForm
    display flex
    width 100%
    height 100vh
    padding 5%
    box-sizing border-box
    align-items center
    justify-content center
    position relative


</style>


