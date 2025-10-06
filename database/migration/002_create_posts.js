import {pool} from "../connection.js";

async function createPostTable() { 
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      id VARCHAR(150) NOT NULL,
     post_title VARCHAR(150) NOT NULL,
      post_desc VARCHAR(200) UNIQUE NOT NULL,
     post_comments VARCHAR(50) NOT NULL,
     user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     )
     `
    );
    console.log("Post table created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error creating users table", error.message);
    process.exit(1);  
  }
}
  createPostTable();