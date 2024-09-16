import { sql } from './db.js'

sql `   
    CREATE TABLE customers
    (   id SERIAL PRIMARY KEY,
        registry text,
        name text,
        age integer,
        email text,
        phone text,
        address text NOT NULL
    );
`.then(() => {
    console.log('Success created table')
})