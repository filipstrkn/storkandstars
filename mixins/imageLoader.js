const imageLoader = {
    data() {
        return {
            isLoading: true,
            imageSelector: '#thumbnail-is-loading'
        }
    },
    methods: {
        setLoad(val) {
            this.isLoading = val
        }
    },
    mounted() {
        const image = document.querySelector(this.imageSelector)
        if (image) image.onload = this.setLoad(false)
        else if (!image) console.error(`${this.imageSelector} has problems with loading`)
        else this.setLoad(true)
    }
}



export default imageLoader