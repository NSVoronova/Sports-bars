import styled from 'styled-components';
import burger_black from '../../../assets/icons/burger_black.svg';
import close_black from '../../../assets/icons/close_black.svg';

export const StyledDiscWrapper = styled.div`
  max-width: 100%;
  padding: 0px 161px;
  @media (max-width: 1100px) {
    padding: 0px 50px;
  }
  @media (max-width: 700px) {
    padding: 0px 10px;
  }
`;

export const StyledDiscNav = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: #000;
  max-width: 990px;
  height: 48px;
  padding: 12px 0;
  margin: 0 auto;
  & li {
    width: 25%;
    text-align: center;
    & a {
      position: relative;
    }
    & a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: width 0.3s ease;
    }
    & a:hover::after {
      width: 100%;
    }
  }
`;

export const StyledBurgerContainer = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: fixed;
  left: 10px;
  top: 15px;
  z-index: 3;
  background-image: ${(props) =>
    props.$isOpen ? `url(${close_black})` : `url(${burger_black})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
`;

export const StyledDiscBurgerMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: ${(props) => (props.$isOpen ? '0' : '-300px')};
  left: 0;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 300px;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: all 0.5s ease-in-out;
  & ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & li {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
