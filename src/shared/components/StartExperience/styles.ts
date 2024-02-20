import styled from 'styled-components';

export const StartDiv = styled.div<{ isAtHome: boolean }>`
  position: relative;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 273px;
  height: ${({ isAtHome }) => (isAtHome ? '94px' : '100px')};

  h3 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 4px;
    letter-spacing: ${({ isAtHome }) => (isAtHome ? '0px' : '4px')};
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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040;
    backdrop-filter: blur(1px);
    &:hover {
      cursor: pointer;
      background-color: #ffffff2b;
    }
  }
`;
