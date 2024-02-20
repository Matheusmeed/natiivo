import { keyframes } from 'styled-components';

export const slideInFromRight = keyframes`
  0% {
    transform: translateX(250%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const slideInFromTop = keyframes`
  0% {
    transform: translateY(-250%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const slideTitleDivInFromRight = keyframes`
  0% {
    transform: translateX(100%) translateY(-40%);
  }
  100% {
    transform: translateX(-50%) translateY(-40%);
  }
`;
