import pg from "pg"
import dotenv from "dotenv"
dotenv.config();
const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});


export const createConnectionToDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Database connected successfully");
  }catch (error) {
    console.log("Database connection failed", error.message);
  }
}

export default createConnectionToDB;