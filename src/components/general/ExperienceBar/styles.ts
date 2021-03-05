import styled from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

interface IExperienceBarLevelBarCompletedProps {
  width: number;
}

interface IExperienceBarCurrentLevelProps {
  left: number;
}

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

export const ExperienceBarLevelBarCompleted = styled.div<IExperienceBarLevelBarCompletedProps>`
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => getLodash(theme, `${theme.mode}.green`)};

  width: ${({ width }) => `${width}%`};
`;

export const ExperienceBarCurrentLevel = styled.span<IExperienceBarCurrentLevelProps>`
  position: absolute;
  top: 12px;

  transform: translateX(-50%);

  left: ${({ left }) => `${left}%`};
`;
