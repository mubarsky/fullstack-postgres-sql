import { pool } from "../connection.js";

async function seedPostData() {
  try {
    await pool.query(`
      INSERT INTO posts (postOwnerId,post_title, post_desc, post_comments)
      VALUES
        (1,'BBC News', 'World Cup 2022: England beat France to reach final', 'Amazing match with stunning performance from both teams'),
        (3,'CNN', 'Economy shows signs of recovery', 'The economy is showing signs of recovery after the pandemic'),
        (5,'TechCrunch', 'New tech startup launches innovative app', 'A new tech startup has launched an innovative app that aims to revolutionize social media');
    `);

    console.log("✅ Post data created successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Unable to seed post data:", error.message);
    process.exit(1);
  }
}

seedPostData();
