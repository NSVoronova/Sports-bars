import { FC } from 'react';
import { StyledCharList } from './styledBarCharacteristic';

interface ICharacteristic {
  chars: string[];
}

const BarCharacteristic: FC<ICharacteristic> = ({ chars }) => {
  return (
    <StyledCharList>
      {chars.map((char) => (
        <li>{char}</li>
      ))}
    </StyledCharList>
  );
};

export default BarCharacteristic;
