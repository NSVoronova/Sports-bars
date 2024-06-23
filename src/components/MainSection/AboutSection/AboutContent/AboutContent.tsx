import {
  StyledAboutContainer,
  StyledAboutImg,
  StyledAboutText,
} from './styledAboutContent';
import about from '../../../../assets/images/about.jpg';

const AboutContent = () => {
  return (
    <StyledAboutContainer>
      <StyledAboutImg src={about} alt='' />
      <StyledAboutText>
        Bienvenido a nuestro sitio web - ¡tu guía de confianza para los mejores
        bares deportivos de Chile! Somos un equipo de apasionados fanáticos del
        deporte y expertos en entretenimiento, dedicados a encontrar y revisar
        los bares deportivos más emocionantes y acogedores de todo el país.
        Nuestro objetivo es ayudarte a encontrar el lugar perfecto para ver
        eventos deportivos, disfrutar de deliciosas bebidas y comidas, y
        disfrutar de la socialización con personas de ideas afines.
      </StyledAboutText>
    </StyledAboutContainer>
  );
};

export default AboutContent;
