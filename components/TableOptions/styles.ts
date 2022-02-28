import styled from "styled-components";

export const Modal = styled.div`
  width: 80%;
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

  span {
    color: #fff;
    cursor: pointer;
    float: right;
  }
`
export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  z-index: 99;
`