import { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from 'pg';

export default async function (request: VercelRequest, response: VercelResponse) {
  const { name = 'World' } = request.query;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query('SELECT NOW() as now');
    const dbTime = result.rows[0].now;
    response.status(200).send(`Hello ${name}! Connected to DB at: ${dbTime}`);
  } catch (error) {
    console.error('Database connection or query error:', error);
    response.status(500).send(`Error connecting to the database: ${error.message}`);
  } finally {
    await client.end();
  }
}
