import React, { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContextProvider';

import { PerfilContainer, PerfilImage, PerfilInfo } from './styles';

const Perfil: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <PerfilContainer>
      <PerfilImage
        src="https://github.com/gspadilha.png"
        alt="Guilherme Padilha"
      />

      <PerfilInfo>
        <strong>Guilherme Padilha</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon" />
          Level {level}
        </p>
      </PerfilInfo>
    </PerfilContainer>
  );
};

export default Perfil;
