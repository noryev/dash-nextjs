import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LeftNavbar from './components/LeftNavbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fenring</title>
        <meta name="description" content="Created by Noyev" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <h1>Lets build an IPFS dashboard!</h1>
      <LeftNavbar/>
      {/*header*/}
      {/*Content*/}
    </div>
  );
}
