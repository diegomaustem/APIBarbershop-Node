import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Main route'
})

server.get('/first', () => {
    return 'First route'
})

server.listen({
    port: 7007
})