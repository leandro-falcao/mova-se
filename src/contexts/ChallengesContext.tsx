import { createContext, useState, ReactNode } from 'react';


interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProvidesProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProvidesProps) {

  const [level, setLevel] = useState(1);

  const [currentExperience, setCurrentExperience] = useState(0);

  const [challengesCompleted, setChallengesCompleted] = useState(0);


  function levelUp() {
    setLevel(level + 1);
    setLevel(level)

  }

  function startNewChallenge() {
    console.log(` novo challenge`);

  }

  return (
    <ChallengesContext.Provider value={
      [
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge
      ]
    }
    >
      {children}
    </ChallengesContext.Provider >
  )
}