import styled, { css } from "styled-components";

const Loader = () => {
  return (
    <Wrapper className="d-flex justify-content-center center-loader">
      <div className="balls-loader-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  ${({ theme }) => css`
    .center-loader {
      margin-left: auto;
      margin-right: auto;
      padding: 150px 0;
    }

    .balls-loader-container {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .balls-loader-container div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${theme.colors.primary};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .balls-loader-container div:nth-child(1) {
      left: 8px;
      animation: balls-loader-container1 0.6s infinite;
    }
    .balls-loader-container div:nth-child(2) {
      left: 8px;
      animation: balls-loader-container2 0.6s infinite;
    }
    .balls-loader-container div:nth-child(3) {
      left: 32px;
      animation: balls-loader-container2 0.6s infinite;
    }
    .balls-loader-container div:nth-child(4) {
      left: 56px;
      animation: balls-loader-container3 0.6s infinite;
    }
    @keyframes balls-loader-container1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes balls-loader-container3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes balls-loader-container2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  `}
`;
