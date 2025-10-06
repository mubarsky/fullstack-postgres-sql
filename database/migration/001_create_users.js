import {pool} from "../connection.js";

async function creaeUsersTable() { 
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(150) NOT NULL,
      last_name VARCHAR(150) NOT NULL,
      email VARCHAR(200) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL,
      role VARCHAR(100)  DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     )
     `
    );
    console.log("Users table created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error creating users table", error.message);
    process.exit(1);  
  }
}
  creaeUsersTable();