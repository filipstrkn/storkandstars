const express = require('express')
const app = express()



app.use(express.json())
app.use(sendMessage)



function sendMessage(req, res, next) {

    const request = require('request')
    const options = {
        method: 'POST',
        uri: 'https://fleep.io/hook/HuKWHiQVQOmioRiqiFvAIg',
        formData: {
            user: req.body.user,
            message: req.body.message
        }
    }

    request(options, (err, response, body) => {

        res.isNewMessageSuccess = response && response.statusCode
        if (err) {
            next()
            throw new Error(err)
        }
        next()
    })

}



app.use('/', (req, res) => {
    const sendMessageStatus = { message: res.isNewMessageSuccess }
    res.end(JSON.stringify(sendMessageStatus))
})



module.exports = {
    path: '/api/new_message',
    handler: app
}


