const Fastify = require('fastify')
const os = require('os')

const fastify = Fastify({
  logger: true
})
// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send(`
    <h1>Hostname:</h1>
    <h2>${os.hostname()}</h2>
  `)
})

// Run the server!
fastify.listen(8080, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
