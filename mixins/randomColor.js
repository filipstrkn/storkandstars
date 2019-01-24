const randomColor = {

    data() {
        return {
            randColMiddle: ''
        }
    },


    computed: {
        randomColor: {
            set(value) {
                if (value === 'reset') {
                    this.randColMiddle = 'inherit'
                } else {
                    const { pallete } = this.$store.state.theme
                    this.randColMiddle = pallete[Math.floor(Math.random() * pallete.length)]
                }
            },
            get() {
                return this.randColMiddle
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