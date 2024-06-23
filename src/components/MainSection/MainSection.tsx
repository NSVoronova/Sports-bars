import AboutSection from './AboutSection/AboutSection';
import BarsSection from './BarsSection/BarsSection';
import { StyledMain } from './styledMainSection';

const MainSection = () => {
  return (
    <StyledMain>
      <AboutSection />
      <BarsSection />
    </StyledMain>
  );
};

export default MainSection;
