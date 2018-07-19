

const entries_table_query = `CREATE TABLE IF NOT EXISTS entries(
            id serial PRIMARY KEY NOT NULL,
            title varchar(255) NOT NULL,
            body varchar(255) NOT NULL,
            created_at timestamp DEFAULT NOW()
        )` 


 export default function run(pool) {
 	return new Promise( (resolve, reject) => {
 		pool.query(entries_table_query)
        .then((res) => {
        	console.log(res.rows[0]);
        	resolve('migrated, entries table created');
        })
        .catch((err) => {
        	reject(err);
        	console.log(err);
        })
 	})
 }
