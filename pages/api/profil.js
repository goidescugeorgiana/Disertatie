// pages/api/profil.js
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    try {
      const { db } = await connectToDatabase();
      const user = await db.collection('users').findOne({ userId });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (method === 'POST') {
    const { userId, name, email, phone } = req.body;

    if (!userId || !name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const { db } = await connectToDatabase();
      await db.collection('users').updateOne(
        { userId },
        { $set: { name, email, phone } },
        { upsert: true }
      );

      return res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
