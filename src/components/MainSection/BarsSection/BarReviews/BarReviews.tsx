import { FC } from 'react';
import { StyledFlexContainer } from '../../styledMainSection';
import {
  StyledReviewContainer,
  StyledReviewText,
  StyledReviewUserName,
  StyledUserImage,
} from './styledBarReviews';
import { StyledMoreInfoButton } from '../styledBarSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import { IBarReview } from '../../../../data';

interface IBarReviewsProps {
  reviews: IBarReview[];
}

const BarReviews: FC<IBarReviewsProps> = ({ reviews }) => {
  const { width = 0 } = useWindowSize();

  return (
    <div>
      <StyledFlexContainer justifyContent='space-between' gap='18px'>
        {width > 933 ? (
          reviews.map((rev) => (
            <StyledReviewContainer key={rev.userName}>
              <StyledUserImage url={rev.userAvatar} />
              <StyledReviewUserName>{rev.userName}</StyledReviewUserName>
              <StyledReviewText>{rev.userFeedback}</StyledReviewText>
            </StyledReviewContainer>
          ))
        ) : (
          <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
            {reviews.map((rev) => (
              <SwiperSlide>
                <StyledReviewContainer key={rev.userAvatar}>
                  <StyledUserImage url={rev.userAvatar} />
                  <StyledReviewUserName>{rev.userName}</StyledReviewUserName>
                  <StyledReviewText>{rev.userFeedback}</StyledReviewText>
                </StyledReviewContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </StyledFlexContainer>
      <Link to='/'>
        <StyledMoreInfoButton type='button'>
          más información
        </StyledMoreInfoButton>
      </Link>
    </div>
  );
};

export default BarReviews;
