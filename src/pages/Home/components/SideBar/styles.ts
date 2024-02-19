import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid;
  border-image: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 12.9%,
      rgba(255, 255, 255, 0.32) 37.77%,
      rgba(255, 255, 255, 0) 106.54%
    )
    1;
`;

export const SelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    width: 27px;
    height: 27px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 17px;
    }

    &:hover {
      background: #ffffff0f;
      box-shadow: 1px 1px 5px 1px #ffffff52 inset;
      backdrop-filter: blur(5px);
      transition: 0.3s;
    }
  }
`;

export const BottomOptions = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #9c9c9c;

    p {
      display: none;
      position: absolute;
      left: 32px;
      font-weight: bold;
      font-size: 0.9em;
    }

    &:hover {
      * {
        color: white;
        transition: 0.3s;
      }

      p {
        display: flex;
      }
    }
  }
`;

export const InteractiveButton = styled.button`
  position: absolute;
  right: -21px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  width: 40px;
  height: 40px;
  background: #403b36;
  box-shadow: 1px 1px 5px 1px #ffffff52 inset;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 5px 2px #ffffff96 inset;
    transition: 0.3s;
  }
`;
