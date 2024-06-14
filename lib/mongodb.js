// lib/mongodb.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Ensure dotenv is loaded

if (!process.env.NEXT_ATLAS_URI || !process.env.NEXT_ATLAS_DATABASE) {
  throw new Error('Please add your Mongo URI and database name to .env');
}

const uri = process.env.NEXT_ATLAS_URI;
const dbName = process.env.NEXT_ATLAS_DATABASE;

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri); // No need for useNewUrlParser and useUnifiedTopology

  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

module.exports = { connectToDatabase };
