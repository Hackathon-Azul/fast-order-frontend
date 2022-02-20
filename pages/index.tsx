import type { NextPage } from 'next'
import styled from 'styled-components'
import Logo from '../components/Logo'
import FormSignIn from '../components/FormSignIn'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Logo />

        <h5 className="my-4 pb-4">Nome do Restaurante</h5>

        <FormSignIn />

      </Container>
    </>
  )
}

export default Home

const Container = styled.div`

`