import PrivacyPolicyHeader from '../../components/PrivacyPolicy/PrivacyPolicyHeader/PrivacyPolicyHeader';
import { StyledPrivWrapper } from '../../components/PrivacyPolicy/PrivacyPolicyHeader/styledPrivacyPolicyHeader';
import PrivacyPolicyMain from '../../components/PrivacyPolicy/PrivacyPolicyMain/PrivacyPolicyMain';

const PrivacyPolicyPage = () => {
  return (
    <StyledPrivWrapper>
      <PrivacyPolicyHeader />
      <PrivacyPolicyMain />
    </StyledPrivWrapper>
  );
};

export default PrivacyPolicyPage;
