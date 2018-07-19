import pool from '../database/db';
import createUsersTable from './create_users_table';
import createEntriesTable from './create_entries_table';


createUsersTable(pool)
	.then((res) =>{
			console.log(res);
		createEntriesTable(pool)
			.then((res)=>{
				console.log(res)
				pool.end();
			}).catch(()=>{
				
			})		
	})
	.catch((err) =>{
		console.log(err)
	})