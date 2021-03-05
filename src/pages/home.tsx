import React from 'react';
import PageTitle from '../components/commons/PageTitle';
import ChallengeBox from '../components/general/ChallengeBox';
import CompletedChallenges from '../components/general/CompletedChallenges';
import CountDown from '../components/general/Coutdown';
import ExperienceBar from '../components/general/ExperienceBar';
import Perfil from '../components/general/Perfil';

import { ChallengesContextProvider } from '../contexts/ChallengesContextProvider';
import { CountdownContextProvider } from '../contexts/CoutdownContextProvider';
import { IHomeProps } from '../interfaces/IHomeProps.interface';

import {
  HomeContainer,
  LeftContainer,
  RightContainer,
} from '../styles/pages/home.module';

const Home: React.FC<IHomeProps> = ({
  currentLevel,
  currentExperience,
  challengesCompleted,
}) => {
  return (
    <ChallengesContextProvider
      currentLevel={currentLevel}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <PageTitle title="Início | Move.it" />

      <ExperienceBar />

      <HomeContainer>
        <CountdownContextProvider>
          <LeftContainer>
            <Perfil />
            <CompletedChallenges />
            <CountDown />
          </LeftContainer>
          <RightContainer>
            <ChallengeBox />
          </RightContainer>
        </CountdownContextProvider>
      </HomeContainer>
    </ChallengesContextProvider>
  );
};

export default Home;
