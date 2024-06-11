// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_ATLAS_URI;
const dbName = process.env.NEXT_ATLAS_DATABASE;

if (!uri || !dbName) {
  throw new Error('Please add your Mongo URI and database name to .env.local');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
