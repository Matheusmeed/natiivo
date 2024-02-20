import { keyframes } from 'styled-components';

export const slideInFromRight = keyframes`
  0% {
    transform: translateX(250%);
  }
  100% {
    transform: translateX(0);
  }
`;
