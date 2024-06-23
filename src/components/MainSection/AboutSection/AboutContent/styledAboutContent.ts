import styled from 'styled-components';

export const StyledAboutImg = styled.img`
  display: block;
  max-width: 723px;
  object-fit: cover;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const StyledAboutContainer = styled.div`
  display: flex;
  gap: 45px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledAboutText = styled.div`
  max-width: 628px;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  @media (max-width: 1300px) {
    max-width: 500px;
    font-size: 28px;
    line-height: 34px;
  }
  @media (max-width: 1200px) {
    position: relative;
    max-width: 80%;
    font-size: 28px;
    margin: 0 10px 0px 50px;
    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      background-color: red;
      left: -35px;
    }
  }
  @media (max-width: 723px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 25px;
  }
`;
