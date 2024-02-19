import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      background-color: #00000038;
      transition: 0.3s;
    }
  }
`;
