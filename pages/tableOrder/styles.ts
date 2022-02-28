import media from "styled-media-query";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  .btn-send {
    ${media.lessThan("medium")`
    bottom: 0;
    left: calc(50vw - 100px);
    position: relative;
    margin: 15px 0;
    `}
  }
`;
