const randomColor = {

    data() {
        return {
            randomColorData: {
                tempCol: '',
                initialRandomColor: '',
                staticRandomColor: ''
            }
        }
    },


    computed: {
        randomColor: {
            set(value) {
                if (value === 'reset') {
                    this.randomColorData.tempCol = this.randomColorData.initialRandomColor || 'inherit'
                } else {
                    const { pallete } = this.$store.state.theme
                    const random = pallete[Math.floor(Math.random() * pallete.length)]

                    this.randomColorData.tempCol =
                        this.randomColorData.staticRandomColor
                        ? this.randomColorData.staticRandomColor
                        : random;
                }
            },
            get() {
                return this.randomColorData.tempCol
            }
        }
    },


    methods: {
        setRandomColor() {
            const { pallete } = this.$store.state.theme
            this.randomColor = pallete[Math.floor(Math.random() * pallete.length)]
        },
        resetRandomColor() {
            this.randomColor = 'reset'
        }
    }

}



export default randomColor