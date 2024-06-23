import styled from 'styled-components';

export const StyledBarWrapper = styled.div`
  background-color: var(--section-bg-color);
  border-radius: 20px;
  max-width: 1166px;
  margin: 58px auto;
  padding: 0px 24px 2px 26px;
  @media (max-width: 1100px) {
    background-color: var(--header-title-color);
  }
  @media (max-width: 768px) {
    margin: 28px auto;
    padding: 0px;
  }
`;
export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 0px auto 18px;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledBarTitleRate = styled.div`
  order: 2;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;
  }
`;
export const StyledBarCharContainer = styled.div`
  order: 3;
  @media (max-width: 1100px) {
    order: 3;
  }
`;
export const StyledBarDecription = styled.p`
  max-width: 286px;
  font-weight: 400;
  font-size: 20px;
  order: 1;
  @media (max-width: 1100px) {
    order: 2;
    text-align: center;
    max-width: 586px;
  }
  @media (max-width: 768px) {
    max-width: 370px;
  }
  @media (max-width: 500px) {
    max-width: 286px;
  }
`;

interface IBarImageProps {
  url?: string;
}
export const StyledBarImage = styled.div<IBarImageProps>`
  width: 518px;
  height: 304px;
  background: url(${({ url }) => url}) no-repeat center/cover;
  @media (max-width: 1178px) {
    width: 418px;
  }
  @media (max-width: 768px) {
    width: 376px;
  }
`;

export const StyledCharHeader = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const StyledMoreInfoButton = styled.button`
  display: block;
  margin: 22px auto;
  padding: 16px 51px;
  border-radius: 20px;
  color: var(--header-title-color);
  font-size: 24px;
  font-weight: 700;
  background-color: var(--section-title-color);
`;
interface IStyledMoreBtn {
  open?: boolean;
}

export const StyledMoreTriangleBtn = styled.button<IStyledMoreBtn>`
  display: block;
  margin: 17px auto;
  background-color: inherit;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'rotateX(180deg)' : 'rotateX(0deg)')};
  & img {
    transition: transform 0.3s ease;
  }
  & img:hover {
    transform: scale(1.2);
  }
`;

export const CollapsibleDiv = styled.div<IStyledMoreBtn>`
  max-height: ${({ open }) => (open ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;
