import { Pool } from "pg";

const globalForDb = global;

export const db =
  globalForDb.db ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
