import { useState } from 'react';
import { navItems } from '../../../data';
import {
  StyledBurgerContainer,
  StyledPrivBurgerMenu,
  StyledPrivNav,
} from './styledPrivacyPolicyHeader';
import { useWindowSize } from '../../../hooks/useWindowSize';

const PrivacyPolicyHeader = () => {
  const { width = 0 } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {width > 768 && (
        <StyledPrivNav>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </StyledPrivNav>
      )}

      {width < 769 && (
        <>
          <StyledBurgerContainer $isOpen={isOpen} onClick={toggleMenu} />
          <StyledPrivBurgerMenu $isOpen={isOpen}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </StyledPrivBurgerMenu>
        </>
      )}
    </nav>
  );
};

export default PrivacyPolicyHeader;
