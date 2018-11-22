const loadingImage = {

    data() {
        return {
            isLoading: true
        }
    },
    methods: {
        setLoad(val) {
            this.isLoading = val
        },
        loadImage(url) {
            return new Promise((resolve, reject) => {

                const img = new Image()
                img.onload = () => resolve(img)
                img.onerror = () => reject(new Error('Image has failed to load from', url))

                if (url) img.src = url

            })
        }
    },
    mounted() {
        this.loadImage(this.src)
            .then( () => this.setLoad(false) )
            .catch(err => console.error(err))
    },
    computed: {
        src() {
            return this.image ? this.image : ''
        }
    }
}

export default loadingImage