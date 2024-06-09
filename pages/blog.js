import Head from 'next/head';
import Header from '@/components/Header';

export default function Blog() {
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <Header />
            <main>
                <h1>Blog</h1>
                <p>Informații despre blog...</p>
            </main>
        </div>
    );
}
