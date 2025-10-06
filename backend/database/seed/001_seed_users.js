import {pool} from "../connection.js";

async function seedUserData() { 
  try {
    await pool.query(
      `InSERT INTO users (first_name, last_name, email, password, role) VALUES
      ('Mubarak', 'Ismail', 'mubarak@email','mubby244', 'admin'),
      ('John', 'Doe', 'john@email','john123', 'manager'),
      ('Jane', 'Smith', 'jane@email','jane123', 'user'),
      ('Alice', 'Johnson', 'alice@email','alice123', 'user'),
      ('Bob', 'Brown', 'bob@email','bob123', 'user')
     `
    );
    console.log("User data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("unable to seed user data", error.message);
    process.exit(1);  
  }
}
  seedUserData();