import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.NEXT_ATLAS_URI;
const database = process.env.NEXT_ATLAS_DATABASE;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('blog');

    const blog = await collection.findOne({
      _id: new ObjectId('6665c51f0f9059a0aff94333'),
    });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
