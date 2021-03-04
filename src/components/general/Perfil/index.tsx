import React from 'react';

import { PerfilContainer, PerfilImage, PerfilInfo } from './styles';

const Perfil: React.FC = () => {
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
          Level 1
        </p>
      </PerfilInfo>
    </PerfilContainer>
  );
};

export default Perfil;
