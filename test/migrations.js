

import chai from 'chai';
import chaiHttp from 'chai-http';
import { Pool, Client } from 'pg';
import createUsersTable from '../migrations/create_users_table';
import createEntriesTable from '../migrations/create_entries_table';


const should = chai.should();

process.env.NODE_ENV = 'test';
const connectionString = 
		process.env.ELEPHANTSQL_URL || 'localhost://postgres:root@localhost:5432/mydia';	

		const pool = new Pool({
		    connectionString: connectionString,
		})


describe('Database, run migrations', () => {
		
	it('It should create users table', () => {
		return createUsersTable(pool)
		.then((result) =>{
			result.should.be.a('string').eql('migrated, users table created');
		});
	});

	it('It should create entries table', () =>{
		return createEntriesTable(pool)
			.then((result) =>{
				result.should.be.a('string').eql('migrated, entries table created');
		});
	});
})
