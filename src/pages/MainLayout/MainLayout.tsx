import { FC, ReactNode } from 'react';
import Footer from '../../components/Footer/Footer';

export interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
