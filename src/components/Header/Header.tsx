import {
  StyledHeaderFooter,
  StyledHeaderWrapper,
} from '../../pages/MainPage/styledMainPage';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import NavigationSection from './NavigationSection/NavigationSection';

const Header = () => {
  return (
    <>
      <StyledHeaderWrapper>
        <NavigationSection />
        <HeaderTitle />
        <StyledHeaderFooter>
          Nuestro sitio web es su guía de los mejores bares deportivos donde
          podrá apostar legalmente a su partido favorito y disfrutar del
          ambiente de auténticas emociones deportivas.
        </StyledHeaderFooter>
      </StyledHeaderWrapper>
    </>
  );
};

export default Header;
