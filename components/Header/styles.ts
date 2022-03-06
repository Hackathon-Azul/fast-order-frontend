import styled, { css } from "styled-components";
import media from "styled-media-query";
import { HeaderProps } from ".";

const wrapperModifiers = {

between: () => css`
justify-content: space-between;
`,

around: () => css`
justify-content: space-around;
`
}

export const HeaderContainer = styled.div<HeaderProps>`
  ${({ theme, isSpaced }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 70px;
    background-color: ${theme.colors.header};

    ${media.greaterThan("medium")`
    ${isSpaced ? wrapperModifiers.around : wrapperModifiers.between}
    `}

    ${media.lessThan("medium")`
      padding: 10px 15px;
    `}
  `}
`;
