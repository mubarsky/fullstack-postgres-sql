import express from 'express';
import dotenv from 'dotenv';

import createConnectionToDB from "../backend/database/connection.js";

dotenv.config();

const app = express();

createConnectionToDB();

const port = process.env.PORT || 3000;

app.listen(port, (req,res) => {
  console.log(`Server is running on localhost ${port}`);
})