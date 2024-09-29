import type { NextPage } from 'next';
import Head from 'next/head';

import Flow from 'components/Flow';


import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Pravah</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>Pravah 🍃</header>
      <div>
        
      <Flow/> 
      </div>
      
    </div>
  );
};

export default Home;