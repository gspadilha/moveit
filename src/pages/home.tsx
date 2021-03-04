import React from 'react';
import PageTitle from '../components/commons/PageTitle';
import CompletedChallenges from '../components/general/CompletedChallenges';
import CountDown from '../components/general/Coutdown';
import ExperienceBar from '../components/general/ExperienceBar';
import Perfil from '../components/general/Perfil';

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
        <LeftContainer>
          <Perfil />
          <CompletedChallenges />
          <CountDown />
        </LeftContainer>
        <RightContainer>a</RightContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
