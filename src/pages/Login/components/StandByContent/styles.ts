import styled from 'styled-components';
import { slideInFromRight } from '../../../../shared/animation/animations';

export const ContentDiv = styled.div`
  animation: ${slideInFromRight} 1.1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 484px;
  }

  @media (max-width: 425px) {
    img {
      width: 374px;
    }
  }
`;
