import { createServer } from 'http'

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    const url = new URL(request.url, 'http://localhost:8080')
    console.log(url)
    const body = `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Node.js Demo</title>
    </head>
    <body>
    <h1 style="color:green">Hello ${url.searchParams.get('name')}</h1>
    <p>${url.searchParams.get('role')}</p>
    </body>
    </html>
    `
    response.end(body)
})

server.listen(8080, () => {
    console.log(`Server is listening to http://localhost:${server.address().port}`)
})