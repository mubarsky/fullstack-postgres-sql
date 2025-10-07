import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();
const secretKey = process.env.JWT_SECRET;
const saltR = process.env.SALT;

/**
 * 
 */