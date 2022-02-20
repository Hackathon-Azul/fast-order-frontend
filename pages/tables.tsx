import type { NextPage } from 'next'
import Header from "../components/Header"
import TableContainer from "../components/TableContainer"
import SmallLogo from '../components/SmallLogo'
import LoggedInUser from '../components/LoggedInUser'

const Tables: NextPage = () => {
  return (
    <>
      <Header>
        <SmallLogo />
        <LoggedInUser>Olá, Fulano de Tal</LoggedInUser>
      </Header>
      <p style={{fontSize:14,fontWeight: 600,marginTop: 15}}>Escolha uma mesa para gerenciar pedidos</p>
      <TableContainer />
    </>
  )
}

export default Tables