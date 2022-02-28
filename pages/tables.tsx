import Header from "../components/Header";
import TableContainer from "../components/TableContainer";
import LoggedInUser from "../components/LoggedInUser";
import TablesService from "services/tables";
import TableType from "dtos/Table";
import User from "dtos/User";
import { useSelector } from "react-redux";
import Logo from "components/Logo";

type Props = {
  data: [TableType];
};

type State = {
  auth: { loggedUser: User };
};
const Tables: React.FC<Props> = ({ data }) => {
  const { name }: User = useSelector((state: State) => state.auth.loggedUser);
  return (
    <>
      <Header>
        <Logo size="small" />
        <LoggedInUser>Olá, {name + "!"}</LoggedInUser>
      </Header>
      <p style={{ fontSize: 14, fontWeight: 600, marginTop: 15 }}>
        Escolha uma mesa para gerenciar pedidos
      </p>
      <TableContainer data={data} />
    </>
  );
};
export async function getServerSideProps() {
  const data = await TablesService.index();

  return { props: { data } };
}
export default Tables;
