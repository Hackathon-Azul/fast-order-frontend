import type { NextPage } from 'next'
import Header from "../components/Header"
import TableContainer from "../components/TableContainer"
import SmallLogo from '../components/SmallLogo'
import LoggedInUser from '../components/LoggedInUser'
import TablesService from 'services/tables'
import TableType from 'dtos/Table'

type Props = {
  data: [TableType]
}
const Tables: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Header>
        <SmallLogo />
        <LoggedInUser>Olá, Fulano de Tal</LoggedInUser>
      </Header>
      <p style={{fontSize:14,fontWeight: 600,marginTop: 15}}>Escolha uma mesa para gerenciar pedidos</p>
      <TableContainer data={data} />
    </>
  )
}
export async function getServerSideProps() {
  const data = await TablesService.index()

  return { props: {data} };
}
export default Tables

