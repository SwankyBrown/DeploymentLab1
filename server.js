var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'fc838fe19e7846e79c006d1fba46cbbc',
    captureUncaught: true,
    captureUnhandledRejections: true,
})



const express = require('express')

const app = express()

app.use(express.json())


// app.get('/name', (req, res) => {
//     res.send("parker")
// })

app.get('/name', (req,res) => {
    try {
        nonExistentFunction();
      } catch (error) {
        rollbar.log(error);
      }
})


app.use(express.static(__dirname + '/public'))

app.listen(5000, () => {
    console.log("we are up on 5000");
})