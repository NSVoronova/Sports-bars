import styled from "styled-components";

export const StyledPrivMain = styled.main`
margin: 60px 0px 6px;
`
export const StyledPrivMainHeader = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: red;
  @media (max-width: 768px) {
    font-size: 26px;
    }
`
export const StyledPrivMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 17px;
  font-weight: 400;
  word-wrap: break-word;
`