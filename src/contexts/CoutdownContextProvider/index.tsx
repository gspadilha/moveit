import {
  FC,
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';
import { ChallengesContext } from '../ChallengesContextProvider';

interface ICountdownContextProviderProps {
  children: ReactNode;
}

interface ICoutdownContextProviderData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  handleStartCountdown: () => void;
  handleResetCountdown: () => void;
}

export const CountdownContext = createContext(
  {} as ICoutdownContextProviderData,
);

const INITIAL_TIME = 60 * 0.05;
let countdownTimeout: NodeJS.Timeout;

export const CountdownContextProvider: FC<ICountdownContextProviderProps> = ({
  children,
}) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(currentValue => currentValue - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleStartCountdown = () => {
    setIsActive(true);
  };

  const handleResetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(INITIAL_TIME);
  };

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        handleStartCountdown,
        handleResetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
