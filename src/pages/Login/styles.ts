import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url('/images/background/mainBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const GradientWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 72.4%,
      rgba(3, 10, 12, 0.64) 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 83.85%,
      rgba(3, 10, 12, 0.64) 100%
    ),
    linear-gradient(90deg, rgba(3, 10, 12, 0.64) 0%, rgba(0, 0, 0, 0) 25.7%),
    linear-gradient(
      180deg,
      rgba(3, 10, 12, 0.64) 0%,
      rgba(0, 0, 0, 0) 16.15%,
      rgba(0, 0, 0, 0) 100%
    );
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 484px;
    height: 262.96px;
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
    bottom: 10px; /* Ajuste a distância da parte inferior conforme necessário */
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
    transition: 0.2s all; /* Adicionando transição para todas as propriedades */

    &:hover {
      cursor: pointer;
      bottom: 0; /* Ajuste conforme necessário para centralizar */
      width: 48px;
      height: 48px;
      background-color: #ffffff2b;
    }
  }
`;
