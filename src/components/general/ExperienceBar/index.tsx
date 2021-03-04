import React from 'react';

import {
  ExperienceBarContainer,
  ExperienceBarValues,
  ExperienceBarLevelBar,
  ExperienceBarLevelBarCompleted,
  ExperienceBarCurrentLevel,
} from './styles';

interface Props {}

const ExperienceBar: React.FC = () => {
  return (
    <ExperienceBarContainer>
      <ExperienceBarValues>0 xp</ExperienceBarValues>
      <ExperienceBarLevelBar>
        <ExperienceBarLevelBarCompleted />
        <ExperienceBarCurrentLevel>300 xp</ExperienceBarCurrentLevel>
      </ExperienceBarLevelBar>
      <ExperienceBarValues>600 xp</ExperienceBarValues>
    </ExperienceBarContainer>
  );
};

export default ExperienceBar;
