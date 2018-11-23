const setWidthOfElement = {
    mounted() {
        this.$store.commit('setProgress', this.$el.clientWidth)

    }
}


export default setWidthOfElement