import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { numeONG, judet, oras, telefon, email } = req.body;

    if (!numeONG || !judet || !oras || !telefon || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const { db } = await connectToDatabase();
      const result = await db.collection('ong').insertOne({
        numeONG,
        judet,
        oras,
        telefon,
        email,
        createdAt: new Date(),
      });

      return res.status(201).json({ message: 'Data submitted successfully', data: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
