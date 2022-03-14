import styled, { css } from "styled-components";
import media from "styled-media-query";

type ModalProps = {
  isCheckout: boolean;
};

export const Modal = styled.div`
  width: 80%;
  max-width: 450px;
  height: auto;
  background-color: var(--custom-blue);
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  z-index: 999;

  ${media.lessThan("medium")`
    button {
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }
  `}

  span {
    color: #fff;
    cursor: pointer;
    float: right;
  }
`;
export const ModalOverlay = styled.div<ModalProps>`
  ${({ isCheckout }) => css`
    width: 100vw;
    min-height: ${isCheckout ? "1200px" : "100vh"};
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 99;
  `}
`;
