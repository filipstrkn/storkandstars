const isVisible = {

    data() {
        return {
            visibleAt: 70,
            visibleOnce: false,
            visibleShown: false
        }
    },

    props: ['visibleDeactivated'],
    computed: {
        runVisible() {
            return this.visibleDeactivated === true ? false : true
        }
    },


    methods: {
        setVisibility() {

            const trigger = (window.innerHeight / 100) * this.visibleAt
            const els = this.$el.querySelectorAll('[data-visible]')

            if (this.runVisible) {

                els.forEach(el => {
                    const position = Math.floor(el.getBoundingClientRect().top)
                    if (!this.visibleOnce && position < trigger) el.dataset.visible = true
                    else if (this.visibleOnce && !this.visibleShown && position < trigger) {
                        el.dataset.visible = true
                        this.visibleShown = true
                    }
                    else if (!this.visibleOnce && position >= trigger) el.dataset.visible = false
                })

            } else {

                els.forEach(el => {
                    delete el.dataset.visible
                })

            }
        }
    },

    mounted() {
        this.setVisibility()
        window.addEventListener('scroll', this.setVisibility)
    }

}


export default isVisible