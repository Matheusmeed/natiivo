import React from 'react';
import { SquareDotsDiv } from './styles';

const SquareDots: React.FC = () => {
  const dots = Array.from({ length: 10 }, (_, index) => (
    <div key={index}></div>
  ));

  return <SquareDotsDiv>{dots}</SquareDotsDiv>;
};

export default SquareDots;
