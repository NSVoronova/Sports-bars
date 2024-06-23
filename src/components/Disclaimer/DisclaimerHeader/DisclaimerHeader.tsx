import { useState } from 'react';
import { navItems } from '../../../data';
import {
  StyledBurgerContainer,
  StyledDiscBurgerMenu,
  StyledDiscNav,
} from './styledDisclaimerHeader';
import { useWindowSize } from '../../../hooks/useWindowSize';

const DisclaimerHeader = () => {
  const { width = 0 } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {width > 768 && (
        <StyledDiscNav>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </StyledDiscNav>
      )}

      {width < 769 && (
        <>
          <StyledBurgerContainer $isOpen={isOpen} onClick={toggleMenu} />
          <StyledDiscBurgerMenu $isOpen={isOpen}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </StyledDiscBurgerMenu>
        </>
      )}
    </nav>
  );
};

export default DisclaimerHeader;
