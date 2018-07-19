import { Pool, Client } from 'pg';
const connectionString = 
			process.env.DATABASE_URL || 'localhost://postgres:root@localhost:5432/mydia';


const pool = new Pool({
    connectionString: connectionString,
})

export default pool;
