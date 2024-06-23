import styled from 'styled-components';

export const StyledH2 = styled.h2`
  font-size: 64px;
  font-weight: 400;
  color: var(--section-title-color);
  margin: 58px 7px;
  @media (max-width: 1100px) {
    text-align: center;
    font-size: 44px;
    margin: 30px 7px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    margin: 15px 7px;
  }
`;
