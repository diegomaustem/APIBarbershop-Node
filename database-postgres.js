import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class databasePostgres {

    async list(search) {

        let customers

        if(search) {

            customers = await sql`select * from customers where name ilike ${'%' +search+ '%'}`

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

    update(id, customer) {

    }

    delete(id) {

    }
}