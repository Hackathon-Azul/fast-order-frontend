import styled, { css } from "styled-components";

type ContainerProps = {
  isWhite?: boolean
}

export const TableContainerTag = styled.div<ContainerProps>`
${({ theme, isWhite = false }) => css`

  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${isWhite ? theme.colors.white : theme.colors.background};
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media(max-width: 576px) {
    width: 96%;
  }

  `}
`