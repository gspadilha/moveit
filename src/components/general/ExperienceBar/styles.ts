import styled from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;
`;

export const ExperienceBarValues = styled.span`
  font-size: 1rem;
`;

export const ExperienceBarLevelBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) =>
    getLodash(theme, `${theme.mode}.grayLine`)};

  flex: 1;
  margin: 0 1.5rem;
  position: relative;
`;

export const ExperienceBarLevelBarCompleted = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => getLodash(theme, `${theme.mode}.green`)};

  width: 50%;
`;

export const ExperienceBarCurrentLevel = styled.span`
  position: absolute;
  top: 12px;

  transform: translateX(-50%);

  left: 50%;
`;
