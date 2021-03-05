import React, { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContextProvider';

import { ModalContainerOverlay, ModalContainer } from './styles';

const ModalLeveUp: React.FC = () => {
  const { currentLevel, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <ModalContainerOverlay>
      <ModalContainer>
        <header>{currentLevel}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </ModalContainer>
    </ModalContainerOverlay>
  );
};

export default ModalLeveUp;
