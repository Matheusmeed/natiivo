import styled from 'styled-components';

export const CopyRightText = styled.p<{ isAtRight?: boolean }>`
  position: absolute;
  bottom: 20px;
  right: ${({ isAtRight }) => (isAtRight ? '30px' : 'unset')};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #ffffffcc;
`;
