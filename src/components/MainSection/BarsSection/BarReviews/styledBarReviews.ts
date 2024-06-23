import styled from 'styled-components';

interface IStyledUserImage {
  url?: string;
}

export const StyledUserImage = styled.div<IStyledUserImage>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
  background: url(${({ url }) => url}) no-repeat center/cover;
`;

export const StyledReviewContainer = styled.div`
  max-width: 359px;
  min-height: 359px;
  margin: 29px auto 0px;
  text-align: center;
  background-color: #ffffff;
  padding: 3px;
  box-shadow: 2px 2px 5px 0px #00000040;
  @media (max-width: 933px) {
    margin: 29px auto 5px;
  }
`;

export const StyledReviewUserName = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 10px auto;
`;

export const StyledReviewText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  padding: 0px 15px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 933px) {
    font-size: 15px;
  }
`;
