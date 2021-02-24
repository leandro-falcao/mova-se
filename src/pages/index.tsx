import Head from 'next/head'
import { CompletChallenges } from '../components/CompleteChallenges';
import { ExperienceBar } from '../components/ExperienceBar';


import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletChallenges />
        </div>
        

        <div></div>

      </section>
    </div>
  );
}


