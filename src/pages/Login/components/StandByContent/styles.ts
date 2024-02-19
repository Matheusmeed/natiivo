import styled, { keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  0% {
    transform: translateX(250%);
  }
  100% {
    transform: translateX(0);
  }
`;

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
