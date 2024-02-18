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

export const StartDiv = styled.div`
  position: relative;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 273px;
  height: 100px;

  h3 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 4px;
    text-align: center;
    color: #f6f6f6;
    margin: 0;
  }

  button {
    position: absolute;
    bottom: 10px;
    width: 38px;
    height: 38px;
    padding: 8px;
    border-radius: 1000px;
    gap: 35px;
    background: #ffffff14;
    border: none;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all;

    &:hover {
      cursor: pointer;
      bottom: 0;
      width: 48px;
      height: 48px;
      background-color: #ffffff2b;
    }
  }
`;
