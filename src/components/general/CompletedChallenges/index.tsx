import React, { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContextProvider';

import { CompletedChallengesContainer } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
};

export default CompletedChallenges;
