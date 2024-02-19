import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #ffffff;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
  }

  button {
    margin-top: 32px;
    border: none;
    width: 206px;
    height: 48px;
    padding: 0px, 16px, 0px, 16px;
    border-radius: 1000px;
    gap: 8px;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    color: #000000;
    cursor: pointer;

    p {
      color: #000000;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.04em;
    }
  }
`;

export const CardDiv = styled.div``;
export const Cards = styled.div``;
export const Card = styled.div``;
export const SelectionButtons = styled.div``;
export const LeftButton = styled.button``;
export const RightButton = styled.button``;
