import styled from 'styled-components';
import burgerIcon from '../../../assets/icons/burger.svg';
import closeIcon from '../../../assets/icons/close.svg';

export const StyledNavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 12px 0;
  max-width: 990px;
`;

export const StyledNavLi = styled.li`
  cursor: pointer;
  width: 25%;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  transition: all 0.5s ease-in-out;
  padding-bottom: 5px;
  & a {
    position: relative;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
  & a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    transition: width 0.3s ease;
  }
  & a:hover::after {
    width: 100%;
  }
`;

export const StyledBurgerMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: 10px;
  top: 10px;
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  z-index: 3;
  background-image: ${(props) =>
    props.$isOpen ? `url(${closeIcon})` : `url(${burgerIcon})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
`;

export const BurgerMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  padding-top: 40px;
  top: 0px;
  left: ${(props) => (props.$isOpen ? '0px' : '-300px')};
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  width: 50%;
  height: 300px;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  z-index: 2;
  transition: all 0.5s ease-in-out;
  & ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & li {
      text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
        1px 1px 0 black;
      cursor: pointer;
      font-size: 20px;
      font-weight: 400;
    }
  }
  @media (max-width: 500px) {
    width: ${(props) => (props.$isOpen ? '100%' : '0%')};
    top: 0px;
  }
`;

export const BurgerMenuList = styled.ul`
  list-style-type: none;
  margin: 40px;
  padding: 0;
  width: 100%;
`;

export const BurgerMenuItem = styled.li`
  font-size: 18px;
  margin-bottom: 25px;
  width: 100%;
  text-align: left;
`;
