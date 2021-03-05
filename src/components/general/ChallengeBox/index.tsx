import React, { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContextProvider';
import { CountdownContext } from '../../../contexts/CoutdownContextProvider';

import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  ChallengeButtonFailed,
  ChallengeButtonCompleted,
  ChallengeActiveHeader,
  ChallengeActiveMain,
  ChallengeActiveFooter,
} from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  );
  const { handleResetCountdown } = useContext(CountdownContext);

  const handleResetChallenge = () => {
    resetChallenge();
    handleResetCountdown();
  };

  const handleCompleteChallenge = () => {
    completeChallenge();
    handleResetCountdown();
  };

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <ChallengeActiveHeader>
            Ganhe {activeChallenge.amount} xp
          </ChallengeActiveHeader>

          <ChallengeActiveMain>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </ChallengeActiveMain>

          <ChallengeActiveFooter>
            <ChallengeButtonFailed type="button" onClick={handleResetChallenge}>
              Falhei
            </ChallengeButtonFailed>

            <ChallengeButtonCompleted
              type="button"
              onClick={handleCompleteChallenge}
            >
              Completei
            </ChallengeButtonCompleted>
          </ChallengeActiveFooter>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
};

export default ChallengeBox;
