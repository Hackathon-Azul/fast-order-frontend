import type { NextPage } from 'next'
// import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'
import Link from 'next/link'
import media from "styled-media-query";

const SingUp: NextPage = () => {
  return (
    <>
      <Container style={{ marginTop: "15px"}}>
        <Logo size="large" />

        <h2 className="my-4">Seja bem vindo</h2>
        <p>Cadastre-se</p>

        <FormSignUp />

        <div className="my-4 py-4">
          <Link href="/">
            <a className="text-white">Já tenho um cadastro</a>
          </Link>
        </div>

      </Container>
    </>
  )
}

export default SingUp

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 650px;
  ${media.lessThan("medium")`
      width:125%;
    `}
`;