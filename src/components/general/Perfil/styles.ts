import styled from 'styled-components';
import { getLodash } from '../../../utils/getLodash';

export const PerfilContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PerfilImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const PerfilInfo = styled.div`
  margin-left: 1.5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.title`)};
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;

    img {
      margin-right: 0.5rem;
    }
  }
`;
