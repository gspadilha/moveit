import { FC, createContext, ReactNode, useState, useEffect } from 'react';

import { saveCookie } from '../../utils/cookies';

import challenges from '../../database/challenges/challenges.json';
import { IChallenge } from '../../database/challenges/challenges.interface';
import { IHomeProps } from '../../interfaces/IHomeProps.interface';
import ModalLeveUp from '../../components/commons/ModalLeveUp';

interface IChallengesContextProviderProps extends IHomeProps {
  children: ReactNode;
}

interface IChallengesContextProviderData {
  currentLevel: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: IChallenge | null;
  resetChallenge: () => void;
  completeChallenge: () => void;
  experienceToNextLevel: number;
  closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext(
  {} as IChallengesContextProviderData,
);

export const ChallengesContextProvider: FC<IChallengesContextProviderProps> = ({
  children,
  ...rest
}) => {
  const [currentLevel, setCurrentLevel] = useState(rest.currentLevel ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState<IChallenge | null>(
    null,
  );
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((currentLevel + 1) * 4, 2);

  useEffect(() => {
    const askForPermission = async () => {
      const notification = await Notification.requestPermission();
      if (notification === 'granted') {
        new Audio('/audios/notification.mp3').play();
      }
    };

    if (Notification.permission !== 'granted') {
      askForPermission();

      alert(
        'Por favor, libere as notificações para melhorar a experiência com esta página!',
      );
    }
  }, []);

  useEffect(() => {
    saveCookie({ name: `currentLevel`, value: currentLevel });
    saveCookie({ name: `currentExperience`, value: currentExperience });
    saveCookie({ name: `challengesCompleted`, value: challengesCompleted });
  }, [currentLevel, currentExperience, challengesCompleted]);

  const levelUp = () => {
    setCurrentLevel(currentValue => currentValue + 1);
    setIsLevelModalOpen(true);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/audios/notification.mp3').play();
    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        icon: '/favicon.png',
        body: `Valendo ${challenge.amount} xp!`,
      });
    }
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

  const closeLevelUpModal = () => {
    setIsLevelModalOpen(false);
  };

  return (
    <ChallengesContext.Provider
      value={{
        currentLevel,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        experienceToNextLevel,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelModalOpen && <ModalLeveUp />}
    </ChallengesContext.Provider>
  );
};
