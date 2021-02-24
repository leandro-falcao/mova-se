import { useState, useEffect } from 'react';

import styles from '../styles/components/CountDown.module.css';

let countDownTimeout: NodeJS.Timeout; 

export function CountDown(){

   const [time, setTime] = useState(25 * 60);
   const [isActive, setIsActive] = useState(false);


   const minutes = Math.floor(time / 60); 
   const seconds = time % 60;

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); 
   
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); 

   function startCountDown(){
      setIsActive(true);
   }
   
   /*  //pausar nosso relogio e iniciar de onde parou.
   function resetCountDown(){
      clearTimeout(countDownTimeout);
      setIsActive(false)
   }
   */

   // resetar para os 25 novamente!
   function resetCountDown(){
      clearTimeout(countDownTimeout);
      setIsActive(false)
      setTime(25 * 60)
}

   useEffect( ()=>{
      if( isActive === true && time > 0){
         countDownTimeout = setTimeout(() => {
               setTime( time - 1 )     
            }, 1000);
        
      }
   }, [isActive, time])
   
   return(
      <div>

         <div className={styles.countDownContainer}>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>

            <span>:</span>
            
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
            
         </div>

         {isActive == false ? 
            (
               <button type="button" 
                  className={styles.countDownButton} 
                  onClick={startCountDown}>
                  Start Contador
               </button>   
            ) 
         :
            (  <>
               <span className={styles.testes1}>

               <button type="button" 
               className={`${styles.countDownButton} ${styles.countDownButtonActive}`} 
               onClick={resetCountDown}>
                  Reset Contador
               </button>
               <span> pause </span>
                  
               </span>
               
               </>
            ) 
         }
      </div>
   );
}