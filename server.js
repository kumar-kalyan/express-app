const express = require('express')
const app = express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 5000 || process.env.PORT;
// First request 
app.get("/hello", (req, res) => {
    res.json({ "message": 'hello' })
})

//listen to app 
app.listen(port, () => {
    console.log(`listning on port ${port}`)
})