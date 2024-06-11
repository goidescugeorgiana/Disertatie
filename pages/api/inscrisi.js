import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, surname, phone, email, judet } = req.body;

    if (!name || !surname || !phone || !email || !judet) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const { db } = await connectToDatabase();
      const collection = db.collection('inscrisi');
      const result = await collection.insertOne({ name, surname, phone, email, judet });

      return res.status(200).json({ message: 'Registration successful', data: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection('inscrisi');
      const inscrisi = await collection.find({}).toArray();

      return res.status(200).json(inscrisi);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
