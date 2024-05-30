const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan(""))

app.get('/', logger, (_, res) => {

    res.status(200).send('home page')
})

app.get('/get-users', (_, res) => {
    res.status(200).send("Users")
})

app.post('/add-users', (_,res) => {
    res.status(201).json({"message" : "user successfully added"})
})

app.put('/user/:id', (req, res) => {
    res.status(201).json({message : `${req.params.id} profile got updated successfully`})
})

app.delete('/user/:id', (req, res) => {
    res.status(200).json({message : `${req.params.id} profile deleted successfully`})
})

app.post('/create')

app.listen(3000, () => {
    console.log("server started")
})