// pages/api/records.js
import { getCollection } from '../../lib/functions';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const collection = await getCollection('records');
      const records = await collection.find({}).toArray();
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch records' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
