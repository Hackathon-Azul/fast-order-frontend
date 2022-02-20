import { HederContainer, UserNameText, DescriptionText } from "./styles"
import { Container } from "react-bootstrap"
import SmallLogo from '../SmallLogo'

const Header = () => {

  const userName = "Fulano de Tal"
  
  return (
    <>
      <HederContainer>
        <SmallLogo />
        <UserNameText>Olá, {userName}</UserNameText>
      </HederContainer>
      <Container>
        <DescriptionText>Escolha uma mesa para gerenciar os pedidos</DescriptionText>
      </Container>
    </>
  )
}

export default Header