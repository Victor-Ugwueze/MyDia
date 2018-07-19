import pool from '../database/db';
import createUsersTable from './create_users_table';
import createEntriesTable from './create_entries_table';


createUsersTable(pool)
	.then((res) =>{
		createEntriesTable(pool)
	})
	.then((res) =>{
		console.log("Tables migrated");
	})
	.catch((err) =>{
		console.log(err)
	})