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