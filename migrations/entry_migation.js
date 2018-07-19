

const { Pool, Client } = require('pg');
const connectionString = 
			process.env.ELEPHANTSQL_URL || 'localhost://postgres:root@localhost:5432/mydia';


const pool = new Pool({
    connectionString: connectionString,
})

const users_table_query = `CREATE TABLE IF NOT EXISTS users(
            id serial PRIMARY KEY NOT NULL,
            username varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW(),
            role_id int NOT NULL
        )` 
 pool.query(users_table_query)
        .then((res) => {
        	console.log(res)
        })
        .catch(err=>console.log(err))
