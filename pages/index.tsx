import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'
import Logo from '../components/Logo'
import FormSignIn from '../components/FormSignIn'

const Home: NextPage = () => {
  return (
    <>
      <Container className='text-center'>
        <Logo />

        <h5 className="my-4 pb-4">Nome do Restaurante</h5>

        <FormSignIn />

      </Container>
    </>
  )
}

export default Home
