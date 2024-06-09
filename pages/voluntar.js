import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/voluntar.module.css';
import { MongoClient } from 'mongodb';

export default function Voluntar({ voluntarData }) {
    return (
        <div>
            <Head>
                <title>Voluntariat</title>
            </Head>
            <Header />
            <main>
                <h1>Acestea sunt oportunitățile de voluntariat</h1>
                <div className={styles.inputBoxes}>
                    {voluntarData.map((info, index) => (
                        <input key={index} type="text" className={styles.inputBox} value={info} readOnly />
                    ))}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('voluntar');
    const voluntarData = await collection.find({}).toArray();
    client.close();

    return {
        props: {
            voluntarData: voluntarData.map(item => item.text)
        }
    };
}
