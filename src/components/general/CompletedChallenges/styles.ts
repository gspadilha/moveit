import styled from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

export const CompletedChallengesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid
    ${({ theme }) => getLodash(theme, `${theme.mode}.border`)};

  font-weight: 500;

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;
