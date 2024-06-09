// pages/index.js
import { connectToDatabase } from '../lib/mongodb';

export async function getServerSideProps() {
  const { database } = await connectToDatabase();
  const records = await database.collection('records').find({}).toArray();
  return {
    props: {
      records: JSON.parse(JSON.stringify(records)),
    },
  };
}

export default function Home({ records }) {
  return (
    <div>
      <h1>Records</h1>
      <ul>
        {records.map((record) => (
          <li key={record._id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
}
