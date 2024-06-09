import Head from 'next/head';
import Header from '@/components/Header';

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Header />
            <main>
                <h1>Contact</h1>
                <p>Informații de contact...</p>
            </main>
        </div>
    );
}
