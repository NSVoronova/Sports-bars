import { FC } from 'react';
import { StyledH2 } from './styledMainSectionTitle';

interface IMainSectionTitle {
  title: string;
}

const MainSectionTitle: FC<IMainSectionTitle> = ({ title }) => {
  return <StyledH2>{title}</StyledH2>;
};

export default MainSectionTitle;
