const os = require('os')
// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.type('text/html')
  reply.send(`
    <h1>Hostname:</h1>
    <h2>${os.hostname()}</h2>
  `)
})

// Run the server!
fastify.listen(80, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
