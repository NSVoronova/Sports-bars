import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
  max-width: 100%;
  background-color: var(--section-bg-color);
  padding: 12px 35px 41px;
  @media (max-width: 1100px) {
    padding: 12px 35px 0px;
  }
  @media (max-width: 700px) {
    padding: 0px 15px;
  }
`;
export const StyledFooterTitle = styled.h3`
  width: 100%;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  height: 55px;
  text-align: center;
  color: var(--section-title-color);
  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const StyledFooterText = styled.p`
  max-width: 496px;
  margin: auto;
  text-align: center;
  font-family: 'Carme', sans-serif;
  font-weight: 400;
  font-size: 14px;
  @media (max-width: 1100px) {
    max-width: 586px;
    margin-bottom: 31px;
  }
`;

export const StyledFooterContent = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 31%;
  gap: 30px;
  & a {
    text-decoration: underline;
  }
  & p {
    font-family: 'Carme', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 1100px) {
    max-width: 586px;
    width: 100%;
    text-align: center;
  }
`;
export const StyledImageContactsContainer = styled(StyledContactsContainer)`
  align-items: end;
  & div {
    display: flex;
    gap: 21px;
  }
  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    align-items: start;
    max-width: 100%;
  }
`;

export const StyledPoliticContainer = styled.p`
  align-self: flex-end;
  font-size: 20px;
  font-weight: 400;
  flex-grow: 1;
  text-align: center;
  & a {
    text-decoration: none;
    position: relative;
  }
  & a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease;
  }
  & a:hover::after {
    width: 100%;
  }
  @media (max-width: 1100px) {
    align-self: flex-start;
    position: relative;
    top: -20px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const StyledFooterImg = styled.img<{ $redbtn?: boolean }>`
  display: block;
  width: ${(props) => (props.$redbtn ? '70px' : '32px')};
  transition: all 0.3s ease;
  &:hover {
    transform: ${(props) => (props.$redbtn ? 'none' : 'scale(1.2)')};
  }
`;
