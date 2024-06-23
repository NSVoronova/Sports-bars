import { FC } from 'react';
import { StyledBarTitle } from './styledBarTitle';

interface IBarTitle {
  title: string;
}
const BarTitle: FC<IBarTitle> = ({ title }) => {
  return <StyledBarTitle>{title}</StyledBarTitle>;
};

export default BarTitle;
