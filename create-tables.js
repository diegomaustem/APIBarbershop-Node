import { sql } from './db.js'


sql`
    CREATE TABLE customers (
        id SERIAL PRIMARY KEY,
        registry VARCHAR(100) NOT NULL,
        name VARCHAR(255) NOT NULL,
        age INTEGER,
        email VARCHAR(50),
        phone VARCHAR(30),
        address TEXT
    );
`.then( () => {
    console.log('Success created table')
});



// Code to create the second table below
// CREATE TABLE stylecut 
// (   id SERIAL PRIMARY KEY,         
//     name VARCHAR(255) NOT NULL,  
//     price NUMERIC(10, 2) NOT NULL, 
//     description TEXT,              
//     customer_id INTEGER REFERENCES customers(id)
// );