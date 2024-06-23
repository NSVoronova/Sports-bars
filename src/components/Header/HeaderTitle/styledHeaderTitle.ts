import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: clamp(40px, 4.44vw, 80px);
  font-weight: 400;
  text-align: right;
  color: var(--main-title-color);
  max-width: clamp(351px, 60.14vw, 1066px);
  align-self: flex-end;
  flex-grow: 1;
  @media (max-width: 768px) {
    margin-top: 20%;
  }
`;

export const StyledTitleSpan = styled.span`
  color: var(--section-title-color);
`;
