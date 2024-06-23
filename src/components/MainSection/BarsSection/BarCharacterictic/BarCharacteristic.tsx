import { FC } from 'react';
import { StyledCharList } from './styledBarCharacteristic';

interface ICharacteristic {
  chars: string[];
}

const BarCharacteristic: FC<ICharacteristic> = ({ chars }) => {
  return (
    <StyledCharList>
      {chars.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </StyledCharList>
  );
};

export default BarCharacteristic;
