import React from 'react';
import PageTitle from '../components/commons/PageTitle';
import ChallengeBox from '../components/general/ChallengeBox';
import CompletedChallenges from '../components/general/CompletedChallenges';
import CountDown from '../components/general/Coutdown';
import ExperienceBar from '../components/general/ExperienceBar';
import Perfil from '../components/general/Perfil';
import { CountdownContextProvider } from '../contexts/CoutdownContextProvider';

import {
  HomeContainer,
  LeftContainer,
  RightContainer,
} from '../styles/pages/home.module';

const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
