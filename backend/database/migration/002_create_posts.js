import { pool } from "../connection.js";

async function createPostTable() {
  try {
    await pool.query(`
       CREATE TABLE IF NOT EXISTS posts  (
        id SERIAL PRIMARY KEY,
         postOwnerId INTEGER NOT NULL,
        post_title TEXT NOT NULL,
        post_desc TEXT NOT NULL,
        post_comments TEXT NOT NULL,
       FOREIGN KEY (postOwnerId)  REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Post table created successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating post table:", error.message);
    process.exit(1);
  }
}

createPostTable();
