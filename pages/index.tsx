import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import FibonacciCalculator from '@/components/FibonacciCalculator';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tango Challenge</title>
        <meta name="description" content="Tango challenge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles['fibonacci-container']}>
          <h1 className={styles.header}>Calculate Fibonacci!</h1>
          <FibonacciCalculator />
        </div>
      </main>
    </>
  );
}
