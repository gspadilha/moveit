import { GetServerSideProps } from 'next';
import React from 'react';
import Home from './home';
import { IHomeProps } from '../interfaces/IHomeProps.interface';

const Index: React.FC<IHomeProps> = ({
  currentLevel,
  currentExperience,
  challengesCompleted,
}) => (
  <Home
    currentLevel={currentLevel}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
  />
);

export default Index;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    currentLevel,
    currentExperience,
    challengesCompleted,
  } = ctx.req.cookies;

  return {
    props: {
      currentLevel: Number(currentLevel),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
