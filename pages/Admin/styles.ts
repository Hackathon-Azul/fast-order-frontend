import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  min-height: 120vh;
  ${({ theme }) => css`
    img {
      cursor: pointer;
    }
    .col-admin-regis {
      background-color: ${theme.colors.orange};
      width: 60%;
      height: 9rem;
      margin: 5rem auto 10px auto;
      border-radius: 5px;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    .col-admin-regis img {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .row-images1 {
      width: 60%;
      height: 9rem;
      margin: 5rem auto -20px auto;
      justify-content: space-around;
    }

    .row-text {
      width: 60%;
      height: 2rem;
      margin: 0 auto;
      justify-content: space-between;
    }

    .admin-images {
      background-color: ${theme.colors.orange};
      height: 100%;
      max-width: 10rem;
      border-radius: 5px;
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    .admin-text {
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    ${media.lessThan("medium")`

    .col-admin-regis {
      width: 90%;
      height: 80px;

    }

    .col-admin-regis img {
       max-height: 75% !important;
       min-height: 60% !important;
     }
     .row-images1 {
      width: 90%;
      margin: 4rem auto -35px auto;
     }

     img {
       width: 5rem !important;
       height: 5rem !important;
     }
     .row-text {
       width: 95%;
       height: 0.5rem;
   
     }

     .admin-text, .text-center {
       padding: 0;
       font-weight: 600;
        font-size: 14px;
        line-height: 16px;
     }

       .admin-images {
        width: 6rem;
         height: 6rem;
         padding: 0.8rem;
       }
    `}
  `}
`;
