import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'
import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Container className='text-center'>
        <Logo />

        <h2 className="my-4">Seja bem vindo</h2>
        <p>Cadastre-se</p>

        <FormSignUp />

        <div className="my-4 py-4">
          <Link href="/api/signin">
            <a className="text-white">Já tenho um cadastro</a>
          </Link>
        </div>

      </Container>
    </>
  )
}

export default Home
