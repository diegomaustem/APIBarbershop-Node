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

    return response.status(201).send()
})

server.put('/customer/:id', async (request, response) => {
    const customerId = request.params.id
    const { name, age, email, phone, address } = request.body

    await database.update(customerId, {
        name,
        age,
        email,
        phone,
        address 
    })

    return response.status(204).send()
})

server.delete('/customer/:id', async(request, response) => {
    const customerId = request.params.id

    await database.delete(customerId)

    return response.status(200).send()
})

server.listen({
    port: 2258
})