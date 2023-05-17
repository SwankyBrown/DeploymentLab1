const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.post('/ma-post', (req,res) => {
    res.send("yah posted")
})

app.listen(5000, () => {
    console.log("we are up on 5000");
})