import styled from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

export const ModalContainerOverlay = styled.div`
  background: rgba(242, 243, 244, 0.8);
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => getLodash(theme, `${theme.mode}.background`)};

  width: 100%;
  max-width: 480px;

  padding: 2rem 3rem;
  border-radius: 5px;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;

    color: ${({ theme }) => getLodash(theme, `${theme.mode}.blue`)};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.title`)};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.text`)};
    margin-top: 0.25rem;
  }

  button {
    font-size: 0;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
  }
`;
