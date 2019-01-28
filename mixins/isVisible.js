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

            const trigger = Math.floor((window.innerHeight / 100) * this.visibleAt)
            const els = this.$el.querySelectorAll('[data-visible]')

            els.forEach(el => {
                const position = Math.floor(el.getBoundingClientRect().top)

                if (position > trigger && this.visibleOnce === false) {
                    el.dataset.visible = this.visibleShown = false
                }
                else if (position <= trigger) {
                    el.dataset.visible = this.visibleShown = true

                }
            })

        }
    },

    beforeMount() {
        window.addEventListener('scroll', this.setVisibility)
    },
    destroyed() {
        window.removeEventListener('scroll', this.setVisibility)
    }

}


export default isVisible