import styled from 'styled-components';
import { slideInFromRight } from '../../../../shared/animation/animations';

export const ContentDiv = styled.div`
  animation: ${slideInFromRight} 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 484px;
  }
`;
