import * as S from "./styles";

export type LogoProps = {
  size?: "normal" | "large";
  hideOnMobile?: boolean;
};

const Logo = ({ size = "normal", hideOnMobile = false }: LogoProps) => (
  <S.Wrapper
    size={size}
    hideOnMobile={hideOnMobile}
    className="my-4"
    src="/logo.svg"
    alt="Pedido Rápido"
  ></S.Wrapper>
);

export default Logo;
