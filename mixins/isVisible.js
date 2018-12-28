const isVisible = {

    data() {
        return {
            visibleAt: 70,
            visibleOnce: false,
            visibleShown: false
        }
    },


    methods: {
        setVisibility() {
            const trigger = (window.innerHeight / 100) * this.visibleAt
            const els = this.$el.querySelectorAll('[data-visible]')
            els.forEach(el => {
                const position = Math.floor(el.getBoundingClientRect().top)
                if (!this.visibleOnce && position < trigger) el.dataset.visible = true
                else if (this.visibleOnce && !this.visibleShown && position < trigger) {
                    el.dataset.visible = true
                    this.visibleShown = true
                }
                else if (!this.visibleOnce && position >= trigger) el.dataset.visible = false
            })
        }
    },

    mounted() {
        window.addEventListener('scroll', this.setVisibility)
    }

}


export default isVisible