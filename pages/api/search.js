// pages/api/search.js
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
      const { db } = await connectToDatabase();
      const query = {
        $or: [
          { ONG: { $regex: q, $options: 'i' } },
          { Oras: { $regex: q, $options: 'i' } },
          { Județ: { $regex: q, $options: 'i' } },
          { Adresa: { $regex: q, $options: 'i' } },
          { Nume: { $regex: q, $options: 'i' } },
          { Prenume: { $regex: q, $options: 'i' } },
          { Email: { $regex: q, $options: 'i' } },
          { Telefon: { $regex: q, $options: 'i' } },
          { Tip: { $regex: q, $options: 'i' } },
          { Frecventa: { $regex: q, $options: 'i' } },
          { Nivel: { $regex: q, $options: 'i' } },
          { Beneficiar: { $regex: q, $options: 'i' } },
          { Disponibilitate: { $regex: q, $options: 'i' } }
        ]
      };
      const records = await db.collection('records').find(query).project({ ONG: 1, Județ: 1 }).toArray();

      return res.status(200).json(records);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
