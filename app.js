
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mountRouter from './route';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
mountRouter(app);


module.exports = app;
