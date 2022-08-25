const PORT = 8000
const axios = require("axios").default;
const express = require("express")
const cors = require("cors");
const { response } = require("express")
var randomWords = require("random-words")

const app = express()

app.use(cors())

app.get('/word', (req, res) => {
    res.json(randomWords({ exactly: 1, maxLength: 5, join: '' }))
})

app.get('/check', (req, res) => {
    const word = req.query.word

    const options = {
        method: 'GET',
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    }

    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data)
    }).catch((error) => {
        console.error(error.response.data.title)
        res.json(error.response.data.title)
    })

})




app.listen(PORT, () => console.log('Server running on port ' + PORT))


