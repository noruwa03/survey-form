import { Pool } from "pg";
import { config } from "dotenv";
config();

const { DB_CONN_LINK } = process.env;

const pool = new Pool({
  connectionString: DB_CONN_LINK,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
