import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/despre-noi.module.css';
import { MongoClient } from 'mongodb';

export default function DespreNoi({ aboutData }) {
    return (
        <div>
            <Head>
                <title>Despre noi</title>
            </Head>
            <Header />
            <main>
                <h1>Acesta este pagina despre noi</h1>
                <div className={styles.aboutContent}>
                    <img src="/about-image.jpg" alt="Despre noi" className={styles.aboutImage} />
                    <div className={styles.textContent}>
                        {aboutData.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection('about');
    const aboutData = await collection.find({}).toArray();
    client.close();

    return {
        props: {
            aboutData: aboutData.map(item => item.text)
        }
    };
}
