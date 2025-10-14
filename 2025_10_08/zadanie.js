let http = require('http')
const url = require('url')
const fs = require('fs').promises

http.createServer(async (req, res) => {
    let urlObject = url.parse(req.url, true)
    let timestamp = Date.now()
    switch(urlObject.pathname){
        case '/homepage':
            res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'})
            res.write('Strona główna')
            res.end()
            break
        case '/jsondocument':
            res.writeHead(200, {'Content-Type': 'text/json'})
            let jsonData = {name: "Janek", class: '4D'}
            res.write(JSON.stringify(jsonData))
            res.end()
            break
        case '/htmlcode':
            res.writeHead(200, {'Content-Type': 'text/html'})
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
            res.write(code)
            res.end()
            break
        case '/htmlfile':
            const file = await fs.readFile('strona.html', 'utf-8')
            res.end(file)
            break
        case '/get_params':
            console.log(JSON.stringify(urlObject.query, null, 2))
            res.writeHead(200, {'Content-Type': 'text/json'})
            await fs.writeFile(`params_${timestamp}.json`, JSON.stringify(urlObject.query, null, 2))
            let jsonInformation = {ok: 'ok'}
            res.write(JSON.stringify(jsonInformation))
            res.end()
            break
        default:
            res.status = 404
            res.end('Error: Not found!')
            break
    }

}).listen(8080, '127.0.0.1')
