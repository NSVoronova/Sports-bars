import styled from 'styled-components';

export const StyledCharList = styled.ul`
  max-width: 273px;
  padding-left: 17px;

  & li {
    font-size: 20px;
    font-weight: 400;
    margin: 18px 0px;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--section-title-color);
      position: absolute;
      left: -15px;
      top: 7px;
    }
  }
`;
