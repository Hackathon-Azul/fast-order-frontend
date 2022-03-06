import media from "styled-media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 950px;

  ${media.greaterThan("medium")`
    .btn-plus {
      margin-left: -4px !important;
    }
    .btn-btn-plus {
      margin-right: 25px;

    }

    .btn-send {
      padding-top: 14px;
    }

    .button-minus {
      margin-left: -10px !important;

    }
    .btn-send, .btn-plus {
      margin-top: 49px !important;
      height: 58px;
      text-align: center;
    }

`}
  ${media.lessThan("medium")`
     min-height: 1150px;

      input[type="number"].b-qty {
          margin-left: 6px;
        }

        .btn-btn-plus {
      margin-bottom: 25px;

    }

        small {
          display: none;
        }
   `}
`;
