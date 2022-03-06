import { HeaderContainer } from "./styles"

export type HeaderProps = {
  isSpaced?: boolean
}

const Header: React.FC<HeaderProps> = ({children, isSpaced = false}) => {
  
  return (
    <>
      <HeaderContainer isSpaced={isSpaced}>
        {children}
      </HeaderContainer>
    </>
  )
}

export default Header