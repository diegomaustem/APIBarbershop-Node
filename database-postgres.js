import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class databasePostgres {

    async list(search) {
        let customers

        if(Number.isInteger(+search)) {
            customers = await sql `select * from customers WHERE id = ${search}`

        } else if(search) {
            customers = await sql`select * from customers WHERE name ilike ${'%' +search+ '%'}`

        } else {
            customers = await sql`select * from customers`
        }

        return customers
    }

    async create(customer) {
        const { name, age, email, phone, address } = customer

        const registry = randomUUID()

        await sql`insert into customers(registry, name, age, email, phone, address)
            VALUES(${registry}, ${name}, ${age}, ${email}, ${phone}, ${address})`   
    }

    async update(id, customer) {
        const { name, age, email, phone, address } = customer

        await sql`update customers set name = ${name}, age = ${age}, email = ${email},
            phone = ${phone}, address = ${address} WHERE id = ${id}` 
    }

    async delete(id) {
        await sql`delete from customers WHERE id = ${id}`
    }
}