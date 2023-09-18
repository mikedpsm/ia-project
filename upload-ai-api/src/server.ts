import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'hi mom'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running')
})