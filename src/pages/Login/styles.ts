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
  background: radial-gradient(circle, #0000 0%, #00000017 50%, #000000d4 100%);
`;
