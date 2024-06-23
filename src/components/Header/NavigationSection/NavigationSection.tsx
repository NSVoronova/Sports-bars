import { navItems } from '../../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledNavLi,
  StyledNavUl,
  StyledBurgerMenu,
  BurgerMenuContainer,
} from './styledNavigationSection';
import { useWindowSize } from '../../../hooks/useWindowSize';

const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {width > 768 ? (
        <StyledNavUl>
          {navItems.map((item) => (
            <StyledNavLi key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </StyledNavLi>
          ))}
        </StyledNavUl>
      ) : (
        <>
          <StyledBurgerMenu onClick={toggleMenu} $isOpen={isOpen} />
          <BurgerMenuContainer $isOpen={isOpen}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </BurgerMenuContainer>
        </>
      )}
    </nav>
  );
};

export default NavigationSection;
