import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query; // Change from `q` to `query`

    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
      const { db } = await connectToDatabase();
      const searchQuery = {
        $or: [
          { ONG: { $regex: query, $options: 'i' } },
          { Oras: { $regex: query, $options: 'i' } },
          { Județ: { $regex: query, $options: 'i' } },
          { Adresa: { $regex: query, $options: 'i' } },
          { Nume: { $regex: query, $options: 'i' } },
          { Prenume: { $regex: query, $options: 'i' } },
          { Email: { $regex: query, $options: 'i' } },
          { Telefon: { $regex: query, $options: 'i' } },
          { Tip: { $regex: query, $options: 'i' } },
          { Frecventa: { $regex: query, $options: 'i' } },
          { Nivel: { $regex: query, $options: 'i' } },
          { Beneficiar: { $regex: query, $options: 'i' } },
          { Disponibilitate: { $regex: query, $options: 'i' } }
        ]
      };
      const records = await db.collection('records').find(searchQuery).project({ ONG: 1, Județ: 1 }).toArray();

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
