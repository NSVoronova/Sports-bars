import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 0px 22px;
  @media (max-width: 730px) {
    padding: 0;
  }
`;
interface IFlexContainerProps {
  justifyContent?: string;
  gap?: string;
  maxWidth?: string;
  margin?: string;
}

export const StyledFlexContainer = styled.div<IFlexContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  gap: ${({ gap }) => gap || '0'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  margin: ${({ margin }) => margin || '0px'};
`;
