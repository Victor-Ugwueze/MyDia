

const users_table_query = `CREATE TABLE IF NOT EXISTS users(
            id serial PRIMARY KEY NOT NULL,
            username varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW(),
            role_id int NOT NULL
        )` 


 export default function run(pool) {
 	return new Promise( (resolve, reject) => {
 		pool.query(users_table_query)
        .then((res) => {
        	resolve('migrated, users table created')
        })
        .catch((err) => {
        	reject(err)
        })
 	})
 }
