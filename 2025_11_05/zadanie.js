const express = require('express')
const path = require('path')
const mysql = require('mysql2')

const app = express()
const port = 3000

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'contact_data'
})

conn.connect((err) => {
    if (err) throw err
    console.log("Connected to the database")
})

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

app.get('/api/contact-messages', (req, res) => {
    conn.query("SELECT * FROM messages", (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.get('/api/contact-messages/:id', (req, res) => {
    let id = req.params.id
    conn.query("SELECT * FROM messages WHERE id = ?", [id], (err, result) => {
        if (err) throw err
        if (result.length !== 0) {
            res.json(result)
        }
        else{
            res.status(404).json({error: "Not found!"})
        }
    })
})

app.post('/kontakt', (req, res) => {
    console.log(req.body)
    conn.query("INSERT INTO messages(id, name, surname, email, message) VALUES (NULL, ?, ?, ?, ?)", [req.body.name, req.body.surname, req.body.email, req.body.message], (err, _result) => {
        if (err) throw err
        console.log("Inserted 1 message")
    })
    res.redirect('/')
})

app.get('*', (req, res) => {
    res.status(404).json({error: "Not found!"})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})