import styled from "styled-components";
import media from "styled-media-query";

export const UserNameText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;

  ${media.lessThan("medium")`
    margin-right: 15vw;
  `}

`