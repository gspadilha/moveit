import styled, { css } from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.title`)};
    font-family: ${({ theme }) => theme.fontFamily.Rajdhani};
    font-weight: 600;
  }
`;

export const CountdownNumber = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) => getLodash(theme, `${theme.mode}.background`)};
  box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

export const CountdownSeparator = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

const buttonStyle = css`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;
`;

export const CountdownButtonStart = styled.button`
  ${buttonStyle}

  transition: background-color 0.2s;

  background: ${({ theme }) => getLodash(theme, `${theme.mode}.blue`)};
  color: ${({ theme }) => getLodash(theme, `${theme.mode}.buttonTextColor`)};

  &:hover {
    background: ${({ theme }) => getLodash(theme, `${theme.mode}.blueDark`)};
  }
`;

export const CountdownButtonStop = styled.button`
  ${buttonStyle}

  background: ${({ theme }) => getLodash(theme, `${theme.mode}.background`)};
  color: ${({ theme }) => getLodash(theme, `${theme.mode}.title`)};

  &:hover {
    background: ${({ theme }) => getLodash(theme, `${theme.mode}.red`)};
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.background`)};
  }
`;
