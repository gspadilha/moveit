import { FC, createContext, ReactNode, useState } from 'react';

import challenges from '../../database/challenges/challenges.json';
import { IChallenge } from '../../database/challenges/challenges.interface';

interface IChallengesContextProviderProps {
  children: ReactNode;
}

interface IChallengesContextProviderData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: IChallenge | null;
  resetChallenge: () => void;
  completeChallenge: () => void;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext(
  {} as IChallengesContextProviderData,
);

export const ChallengesContextProvider: FC<IChallengesContextProviderProps> = ({
  children,
}) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(
    null,
  );

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(currentValue => currentValue + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(currentValue => currentValue + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
