import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
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
  overflow: hidden;
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
