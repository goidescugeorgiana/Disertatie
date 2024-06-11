// lib/functions.js
import { connectToDatabase } from './mongodb';

export const getCollection = async collectionName => {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
};
