import React, { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContextProvider';

import {
  ExperienceBarContainer,
  ExperienceBarValues,
  ExperienceBarLevelBar,
  ExperienceBarLevelBarCompleted,
  ExperienceBarCurrentLevel,
} from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const progresBarLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel,
  );

  return (
    <ExperienceBarContainer>
      <ExperienceBarValues>0 xp</ExperienceBarValues>

      <ExperienceBarLevelBar>
        <ExperienceBarLevelBarCompleted width={progresBarLevel} />
        <ExperienceBarCurrentLevel left={progresBarLevel}>
          {currentExperience} xp
        </ExperienceBarCurrentLevel>
      </ExperienceBarLevelBar>

      <ExperienceBarValues>{experienceToNextLevel} xp</ExperienceBarValues>
    </ExperienceBarContainer>
  );
};

export default ExperienceBar;
