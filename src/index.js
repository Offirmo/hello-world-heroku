const http = require('http')

const _ = require('lodash')

console.log('Hello world from the JS app!')

const PORT = process.env.PORT || 5000
const FOO = process.env.FOO || 33

// https://blog.risingstack.com/your-first-node-js-http-server/
const server = http.createServer(function requestHandler(request, response) {
	response.end(`Hello from node.js!
FOO = ${FOO}
random dice = ${_.random(1, 6)}
node version = ${process.version}
`
	)
})

server.listen(PORT, (err) => {
	if (err) {
		return console.error('something bad happened', err)
	}

	console.info(`server is listening on ${PORT}`)
})
