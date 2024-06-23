import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';
import { barItems } from '../../../data';
import BarTitle from './BarTitle/BarTitle';
import { StyledFlexContainer } from '../styledMainSection';
import BarReviews from './BarReviews/BarReviews';
import {
  CollapsibleDiv,
  StyledBarCharContainer,
  StyledBarContainer,
  StyledBarDecription,
  StyledBarImage,
  StyledBarTitleRate,
  StyledBarWrapper,
  StyledCharHeader,
  StyledMoreTriangleBtn,
} from './styledBarSection';
import BarCharacteristic from './BarCharacterictic/BarCharacteristic';
import BarAddress from './BarAdress/BarAddress';
import triangle from '../../../assets/icons/triangle.svg';
import { useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';

const BarsSection = () => {
  const [openReviewIndex, setOpenReviewIndex] = useState<number | null>(null);
  const { width = 0 } = useWindowSize();

  const toggleOpen = (index: number) => {
    setOpenReviewIndex(index === openReviewIndex ? null : index);
  };

  return (
    <>
      <MainSectionTitle title='Bares deportivos' />
      {barItems.map((item) => (
        <StyledBarWrapper key={item.id}>
          <BarTitle title={item.name} />
          <StyledBarContainer>
            <StyledBarDecription>{item.description}</StyledBarDecription>
            <StyledBarTitleRate>
              <StyledFlexContainer
                justifyContent='center'
                margin='0px 0px 18px'
              >
                <img src={item.rate} alt='rate' />
              </StyledFlexContainer>
              <StyledBarImage url={item.image} />
              {width < 1101 && <BarAddress address={item.address} />}
            </StyledBarTitleRate>
            <StyledBarCharContainer>
              <StyledCharHeader>Características:</StyledCharHeader>
              <BarCharacteristic chars={item.characteristics} />
            </StyledBarCharContainer>
          </StyledBarContainer>
          {width > 1100 && <BarAddress address={item.address} />}
          <CollapsibleDiv open={openReviewIndex === item.id}>
            <BarReviews reviews={item.reviews} />
          </CollapsibleDiv>
          <StyledMoreTriangleBtn
            type='button'
            onClick={() => toggleOpen(item.id)}
            open={openReviewIndex === item.id}
          >
            <img src={triangle} alt='more' />
          </StyledMoreTriangleBtn>
        </StyledBarWrapper>
      ))}
    </>
  );
};

export default BarsSection;
