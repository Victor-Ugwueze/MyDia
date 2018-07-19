import chai from 'chai';
import chaiHttp from 'chai-http';

import db from '../migrations/entry_migation';

const should = chai.should();



describe('Database, run migrations', () => {

	it('It should create users table', (done) => {

		const { Pool, Client } = require('pg');
		const connectionString = 
		process.env.ELEPHANTSQL_URL || 'localhost://postgres:root@localhost:5432/mydia';

		const pool = new Pool({
		    connectionString: connectionString,
		})
		db(pool)
		.then((res)=> {
			res.should.be.a('string');	
		})
		.catch((err)=> {

		})
		done();

	});
})

