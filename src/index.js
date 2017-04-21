const http = require('http')

const _ = require('lodash')

console.log('Hello world from the JS app!')

const PORT = process.env.PORT || 5000
const FOO = process.env.FOO || 33


function requestHandler(request, response) {
	response.end('Hello from node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
	if (err) {
		return console.error('something bad happened', err)
	}

	console.info(`server is listening on ${PORT}`)
})
