import { fastify } from 'fastify'
import { databasePostgres } from './database-postgres.js'

const server = fastify()
const database = new databasePostgres()

server.get('/customers', async (request, response) => {

    const search = request.query.search

    const customers = await database.list(search)
    
    return customers
})

server.get('/customer/:id', () => {
    return 'Only a customer'
})

server.post('/customer', async (request, response) => {

    const { name, age, email, phone, address } = request.body

    await database.create({
        name, 
        age,
        email,
        phone,
        address
    })

    return response.status(204).send()
})

server.put('/customer/:id', () => {
    return 'Update a customer'
})

server.delete('/customer/:id', () => {
    return 'Delete a customer'
})

server.listen({
    port: 2258
})