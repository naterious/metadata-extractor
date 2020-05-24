import 'ts-node/register';
import * as knex from 'knex';

require('dotenv').config()

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
}

const database = {
  client: "mysql",
  connection,
  migrations: {
    tableName: "migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
} as knex.Config;

export = database