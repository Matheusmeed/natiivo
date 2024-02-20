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

export const fadeInToLeft = keyframes`
  0% {
    opacity: 0.7;
    transform: translateY(10px);
    transform: translateX(40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    transform: translateX(0);

  }
`;

export const fadeInToRight = keyframes`
  0% {
    opacity: 0.7;
    transform: translateY(10px);
    transform: translateX(-360px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    transform: translateX(0);

  }
`;
