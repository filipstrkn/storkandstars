const fileDetector = {

    methods: {
        detectFile(files = [], types = [] || '') {

            const reg = new RegExp(`\\.(${types.join('|')})$`, 'i')
            return files.filter(file => {
                if (typeof file.filename) return reg.test(file.filename)
                else return

            })
        }
    }
}


export default fileDetector