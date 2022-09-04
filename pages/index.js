import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <title>Create Next App</title>
        <meta name="description" content="Created by Noyev" />
        <link rel="icon" href="/pro.ico" />
       <div className="center">
      <p>The text within the div is centered horizontally.</p>
      </div>
    </div>
  );
}
