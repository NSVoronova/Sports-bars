import DisclaimerHeader from '../../components/Disclaimer/DisclaimerHeader/DisclaimerHeader';
import { StyledDiscWrapper } from '../../components/Disclaimer/DisclaimerHeader/styledDisclaimerHeader';
import DisclaimerMain from '../../components/Disclaimer/DisclaimerMain/DisclaimerMain';

const DisclaimerPage = () => {
  return (
    <StyledDiscWrapper>
      <DisclaimerHeader />
      <DisclaimerMain />
    </StyledDiscWrapper>
  );
};

export default DisclaimerPage;
