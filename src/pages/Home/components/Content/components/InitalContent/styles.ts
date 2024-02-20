import styled from 'styled-components';
import { slideTitleDivInFromRight } from '../../../../../../shared/animation/animations';

export const TitleDiv = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: #ffffff;
  animation: ${slideTitleDivInFromRight} 0.9s ease-in-out;

  h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 46px;
    letter-spacing: 0.01em;
  }

  p {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    text-align: center;
    max-width: 560px;
    color: #dadada;
    margin-bottom: 60px;
  }
`;
