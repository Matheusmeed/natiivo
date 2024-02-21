import styled from 'styled-components';

export const Wrapper = styled.div<{ background?: string }>`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${({ background }) =>
    background ? `url(${background})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  video {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const GradientWrapper = styled.div`
  z-index: 1;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
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
