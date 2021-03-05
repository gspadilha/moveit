import styled, { css } from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

export const ChallengeBoxContainer = styled.div`
  height: 100%;
  background: ${({ theme }) => getLodash(theme, `${theme.mode}.background`)};

  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4rem;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4rem;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ChallengeActiveHeader = styled.header`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => getLodash(theme, `${theme.mode}.blue`)};

  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid
    ${({ theme }) => getLodash(theme, `${theme.mode}.grayLine`)};
`;

export const ChallengeActiveMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.title`)};
  }

  p {
    line-height: 1.5;
  }
`;

export const ChallengeActiveFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const challengeButton = css`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${({ theme }) => getLodash(theme, `${theme.mode}.background`)};

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChallengeButtonFailed = styled.button`
  ${challengeButton}

  background: ${({ theme }) => getLodash(theme, `${theme.mode}.red`)};
`;

export const ChallengeButtonCompleted = styled.button`
  ${challengeButton}

  background: ${({ theme }) => getLodash(theme, `${theme.mode}.green`)};
`;
