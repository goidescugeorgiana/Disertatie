// hashExistingPassword.mjs
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import pkg from './lib/mongodb.js';

const { connectToDatabase } = pkg;

// Load environment variables
dotenv.config();

async function hashExistingPassword() {
  const plainPassword = 'Disertatie33!';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const { db } = await connectToDatabase();
  await db.collection('users').updateOne(
    { email: 'goidescu33@gmail.com' },
    { $set: { parola: hashedPassword } }
  );

  console.log('Password hashed and updated in the database');
}

hashExistingPassword();
