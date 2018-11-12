const express = require('express')
const app = express()

app.use(express.json())


function sendMessage(chunk) {

    const request = require('request')
    const options = {
        method: 'POST',
        uri: 'https://fleep.io/hook/HuKWHiQVQOmioRiqiFvAIg',
        formData: {
            user: chunk.user,
            message: chunk.message
        }
    }


    request(options, (err, res, body) => {
        if (err) throw new Error(err)
    })

}


app.use('/', (req, res) => {
    const { body } = req
    sendMessage(body)
    res.end()
})


module.exports = {
    path: '/api/new_message',
    handler: app
}


