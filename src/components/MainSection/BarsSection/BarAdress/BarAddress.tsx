import { FC } from 'react';
import location_img from '../../../../assets/icons/location.svg';
import { StyledFlexContainer } from '../../styledMainSection';
import { StyledBarAdress } from './styledBarAddress';

interface IBarAddress {
  address: string;
}
const BarAddress: FC<IBarAddress> = ({ address }) => {
  return (
    <StyledFlexContainer
      justifyContent='center'
      gap='7px'
      margin='30px 20px 17px'
    >
      <img src={location_img} alt='bar_address' />
      <StyledBarAdress>{address}</StyledBarAdress>
    </StyledFlexContainer>
  );
};

export default BarAddress;
