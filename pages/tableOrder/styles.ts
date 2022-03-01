import media from "styled-media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 1200px;

  ${media.greaterThan("medium")`
    .btn-x {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    position: absolute;
    }
    .btn-x > svg {
      width: 40px;
      height: 40px;
    }
    .form-control {
      max-width: 600px;
      margin: 0 auto;
    }

    .primary-form-control {
        margin-top: 50px !important;
      }

    .form-label-order {
    justify-content: start;
    display: flex;
    align-items: center;
    margin-left: 23vw;
    }

    input[type="currency"] {
      max-width: 350px;
      margin-right: -15px;
    }

`}
  ${media.lessThan("medium")`
input[type="currency"] {
      max-width: 125px;
      width: 25%;
      height: 50px;
      margin-top: 6px;
    }

    .btn-x > svg {
      width: 20px;
      height: 20px;
    }

    .btn-x {
    position: absolute;
    left: 30%;
    bottom: -307px;
    }
`}
`;

export const ButtonContainer = styled.div`
  .btn-send {
    ${media.lessThan("medium")`
    position: absolute;
    display: flex;
    right: 11px;
    bottom: -306px;
    `}

    ${media.greaterThan("medium")`
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 55px;
    margin-left: -25px;

    
    `}
  }
`;
