<template>
    <form>


        <component
            v-for="(blok, index) in blok.steps"
            :key="blok._uid"
            :index="index"
            v-show="index === $store.state.forms[id].current"
            :blok="blok"
            :action="action"
            :form="id"
            :is="blok.component">
        </component>


        <!-- //////////////////////////////////////////////////////////////
            Step
        /////////////////////////////////////////////////////////////// -->
        <!-- <step
            v-for="(step, index) in steps"
            :key="index"
            v-show="index === $store.getters.currentStep"
            :step="step"
            :message="message"
            :submit="submit"/> -->



    </form>
</template>



<script>

export default {
    name: 'Form',
    props: ['blok'],
    data() {
        return {
            id: ''
        }
    },

    computed: {
        action() {
            return this.blok.action
        },
        // current() {
        //     return this.$store.state.forms[this.id].current
        // }
    },

    created() {
        this._id()
        this.$store.state.forms[this.id] = {
                total: this.blok.steps.length - 1,
                values: {},
                current: 0,
                status: null,
        }
    },


    destroyed() {
        delete this.$store.state.forms[this.id]
    },

    methods: {
        _id() {
            this.id = '$f' + Object.keys(this.$store.state.forms).length
        }
    }


}
</script>