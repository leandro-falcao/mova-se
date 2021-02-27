import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProvidesProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProvidesProps) {

  const [level, setLevel] = useState(1);

  const [currentExperience, setCurrentExperience] = useState(0);

  const [challengesCompleted, setChallengesCompleted] = useState(0);


  function levelUp() {
    setLevel(level + 1);
    setLevel(level)

  }

  return (
    <ChallengesContext.Provider value={level, levelUp}>
      {children}
    </ChallengesContext.Provider >
  )
}