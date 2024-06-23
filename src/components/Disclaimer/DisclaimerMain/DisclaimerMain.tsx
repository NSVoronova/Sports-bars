import { disclaimerItems } from '../../../data';
import { StyledDiscMain, StyledDiscMainContent, StyledDiscMainHeader } from './styledDisclaimerMain';

const DisclaimerMain = () => {
  return (
    <StyledDiscMain>
      {disclaimerItems.map((item) => (
        <>
          <StyledDiscMainHeader>{item.title}</StyledDiscMainHeader>
          <StyledDiscMainContent>
            {item.content.map((text) => (
              <p>{text}</p>
            ))}
          </StyledDiscMainContent>
        </>
      ))}
    </StyledDiscMain>
  );
};

export default DisclaimerMain;
