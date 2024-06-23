import styled from 'styled-components';
import background from '../../assets/images/main_pic.jpg';

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  min-height: 100vh;
  color: var(--header-title-color);
  background: url(${background}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  gap: 46px;
  padding: 0 21px 22px 49px;
  @media (max-width: 500px) {
    padding: 0 15px 28px 5px;
  }
`;
export const StyledHeaderFooter = styled.footer`
  max-width: clamp(360px, 78.06vw, 1424px);
  font-size: clamp(16px, 1.67vw, 24px);
`;
