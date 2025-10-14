let http = require('http')
const {readFile} = require('fs/promises')

http.createServer(async (req, res) => {
    switch(req.url){
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
            const file = await readFile('strona.html', 'utf-8')
            res.end(file)
            break
        default:
            res.status = 404
            res.end('Error: Not found!')
    }

}).listen(8080, '127.0.0.1')

