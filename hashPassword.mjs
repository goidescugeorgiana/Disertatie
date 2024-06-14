import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from './lib/mongodb.js'; // Ensure the path is correct

dotenv.config({ path: '.env' });

async function hashPassword() {
  const plainPassword = 'Disertatie33!';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const { db } = await connectToDatabase();
  await db.collection('users').updateOne(
    { email: 'goidescu33@gmail.com' },
    { $set: { parola: hashedPassword } }
  );

  console.log('Password hashed and updated in the database');
}

hashPassword();
