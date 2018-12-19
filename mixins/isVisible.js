const isVisible = {

    data() {
        return {
            visibleAt: 70
        }
    },


    methods: {
        setVisibility() {
            const trigger = (window.innerHeight / 100) * this.visibleAt
            const els = this.$el.querySelectorAll('[data-visible]')
            els.forEach(el => {
                const position = Math.floor(el.getBoundingClientRect().top)
                if (position < trigger) el.dataset.visible = true
                else el.dataset.visible = false
            })
        }
    },

    mounted() {
        window.addEventListener('scroll', this.setVisibility)
    }

}


export default isVisible