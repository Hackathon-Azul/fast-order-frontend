import styled, { css } from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 70px;
    background-color: ${theme.colors.header};

    ${media.lessThan("medium")`
      padding: 10px 15px;
    `}
  `}
`;
