import {
  StyledContactsContainer,
  StyledFooterContainer,
  StyledFooterContent,
  StyledFooterImg,
  StyledFooterText,
  StyledFooterTitle,
  StyledImageContactsContainer,
  StyledPoliticContainer,
} from './styledFooter';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/Arrow.svg';
import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';
import until18 from '../../assets/icons/18+.svg';
import { useWindowSize } from '../../hooks/useWindowSize';

const Footer = () => {
  const { width = 0 } = useWindowSize();

  return (
    <StyledFooterContainer>
      <StyledFooterTitle>Dicslimer</StyledFooterTitle>
      <StyledFooterText>
        Tenga en cuenta que todos los torneos y eventos deportivos que aparecen
        en estos bares deportivos son sólo para fines de entretenimiento. No hay
        oportunidad de ganar dinero real en ellos. Al participar en estos
        eventos, sólo lo hace por diversión y emoción deportiva. Todas las
        apuestas y ganancias son condicionales y no tienen equivalente en
        metálico.
      </StyledFooterText>
      <StyledFooterContent>
        <StyledContactsContainer>
          <p>
            Si desea ponerse en contacto con nosotros o hacernos llegar sus
            comentarios, no lo dude. Puede ponerse en contacto con nosotros por
            correo electrónico -{' '}
            <Link to='mailto:maket2@gmail.com'>maket2@gmail.com</Link>
          </p>
          <p>
            «heatedjackpots.com» utiliza cookies para ofrecerte la mejor
            experiencia. Al permanecer en el sitio, usted acepta el uso de
            cookies - <Link to='/'>más información en</Link>{' '}
            <img src={arrow} alt='arrow' />
          </p>
        </StyledContactsContainer>
        {width > 1100 ? (
          <>
            <StyledPoliticContainer>
              <Link to='/discleimer'>Política de privacidad</Link>
            </StyledPoliticContainer>
            <StyledImageContactsContainer>
              <div>
                <Link to='https://web.telegram.org/'>
                  <StyledFooterImg src={telegram} alt='telegram' />
                </Link>
                <Link to='https://www.instagram.com/'>
                  <StyledFooterImg src={instagram} alt='instagram' />
                </Link>
              </div>
              <StyledFooterImg $redbtn src={until18} alt='until18' />
            </StyledImageContactsContainer>
          </>
        ) : (
          <>
            <>
              <StyledImageContactsContainer>
                <div>
                  <StyledFooterImg src={telegram} alt='telegram' />
                  <StyledFooterImg src={instagram} alt='instagram' />
                </div>
                <StyledFooterImg $redbtn src={until18} alt='until18' />
              </StyledImageContactsContainer>
            </>
            <StyledPoliticContainer>
              <Link to='/discleimer'>Política de privacidad</Link>
            </StyledPoliticContainer>
          </>
        )}
      </StyledFooterContent>
    </StyledFooterContainer>
  );
};

export default Footer;
