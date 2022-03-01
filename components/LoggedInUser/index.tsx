import * as S from "./styles";

const LoggedInUser = ({ children }) => {
  return <S.UserNameText>{children}</S.UserNameText>;
};

export default LoggedInUser;
