const express = require('express');
const fs = require('fs/promises');
const path = require('path')
const url = require('url');
const app = express();
const port = 3000

app.get('/homepage', (req, res) => {
    res.send('Strona główna')
})

app.get('/jsondocument', (req, res) => {
    res.send({name: "Janek", class: '4D'})
})

app.get('/htmldocument', (req, res) => {
    let code = `<html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Kod HTML</title>
                </head>
                <body>
                    <h1>Przedmioty szkolne</h1>
                    <ol>
                        <li>j. polski</li>
                        <li>matematyka</li>
                        <li>j.angielski</li>
                        <li>informatyka</li>
                    </ol>
                </body>
            </html>`

    res.send(code);
})

app.get('/htmlfile', async (req, res) => {
    const file = await fs.readFile(path.join(__dirname, 'strona.html'), 'utf8')
    res.send(file)
})

app.get('/get_params', async (req, res) => {
    let urlObject = url.parse(req.url, true)
    let timestamp = Date.now()
    console.log(JSON.stringify(urlObject.query, null, 2))
    await fs.writeFile(path.join(__dirname, `params_${timestamp}.json`), JSON.stringify(urlObject.query, null, 2))
    let jsonInformation = {ok: 'ok'}
    res.send(jsonInformation)
})

app.use(express.static(path.join(__dirname, 'assets')))

app.get('*', (req, res) => {
    res.status(404).json({error: "Not found!"})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);

})
