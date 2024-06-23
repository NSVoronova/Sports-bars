import { PrivacyPolicyItems } from '../../../data';
import {
  StyledPrivMain,
  StyledPrivMainContent,
  StyledPrivMainHeader,
} from './styledPrivacyPolicyMain';

const PrivacyPolicyMain = () => {
  return (
    <StyledPrivMain>
      {PrivacyPolicyItems.map((item) => (
        <>
          <StyledPrivMainHeader key={item.id}>{item.title}</StyledPrivMainHeader>
          <StyledPrivMainContent>
            {item.content.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </StyledPrivMainContent>
        </>
      ))}
    </StyledPrivMain>
  );
};

export default PrivacyPolicyMain;
