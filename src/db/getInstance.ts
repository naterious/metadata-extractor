import knex from 'knex';

export const getDbInstance = (): knex => {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
  }

  return knex({
    client: 'mysql',
    connection: config,
  });
}
