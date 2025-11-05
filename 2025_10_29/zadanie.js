const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'static/homepage.html'))
})

app.get('/o-nas', async (req, res) => {
    res.sendFile(path.join(__dirname, 'static/about.html'))
})

app.get('/oferta', async (req, res) => {
    res.sendFile(path.join(__dirname, 'static/offer.html'))
})

app.get('/kontakt', async (req, res) => {
    res.sendFile(path.join(__dirname, 'static/contact.html'))
})

app.post('/kontakt', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.get('*', (req, res) => {
    res.status(404).json({error: "Not found!"})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

