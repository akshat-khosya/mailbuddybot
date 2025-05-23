import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../utils/env';

const db = drizzle(env.DATABASE_URL);

export default db;
