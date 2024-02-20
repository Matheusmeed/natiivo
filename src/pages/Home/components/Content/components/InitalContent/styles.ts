import styled from 'styled-components';
import { slideTitleDivInFromRight } from '../../../../../../shared/animation/animations';

export const TitleDiv = styled.div`
  width: 670px;
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

  @media (max-width: 870px) {
    width: 460px;
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 620px) {
    width: 260px;
    text-align: center;

    h1 {
      line-height: 36px;
    }

    p {
      line-height: 20px;
      text-align: center;
    }
  }

  @media (max-width: 420px) {
    width: 230px;
    text-align: right;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
      text-align: right;
    }
  }
`;
