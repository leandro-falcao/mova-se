import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const contextData = useContext(ChallengesContext)

  const hasActiveChallege = true;


  return (
    <div className={styles.ChallengeBoxContainer}>
      { hasActiveChallege ? (

        <div className={styles.challengeActive}>
          <header>ganhe 400 xp </header>

          <main>
            <img src="icons/body.svg" />
            
            <strong>novo desafio</strong>
            
            <p>levante e faça uma caminhada de 3 minutos</p>
          </main>
            
            <footer>
              
              <button
                type="button"
                className={styles.challengeFailedButton}
                >
              { contextData}-falhei
              </button>

              <button
                type="butto"
                className={styles.challengeSucceededButton }
                >
                completei
              </button>
            
          </footer>
          
        </div>
        )
        : (
             
            <div className={styles.ChallengeNotActive}>
              <strong>
                finalize um ciclo para receber um desafio
              </strong>
              <p>
                <img src="icons/level-up.svg" alt="level up" />
                avance de level completando desafios
              </p>
            </div>     
          ) 
    }
   
    </div>
  );
}