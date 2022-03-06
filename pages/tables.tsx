import Header from "../components/Header";
import TableContainer from "../components/TableContainer";
import LoggedInUser from "../components/LoggedInUser";
import TablesService from "services/tables";
import TableType from "dtos/Table";
import User from "dtos/User";
import { useSelector } from "react-redux";
import Logo from "components/Logo";
import styled from "styled-components";
import media from "styled-media-query";
import OrderService from "services/order";
import uswr from "swr"
import Order from "dtos/Order";

type Props = {
  data: [TableType];
  orders: [Order]

};

type State = {
  auth: { loggedUser: User };
};
const Tables: React.FC<Props> = ({ data }) => {


    const { name }: User = useSelector((state: State) => state.auth.loggedUser);

  return (
    <>
      <Header isSpaced>
        <Logo size="small" />
        <LoggedInUser>Olá, {name + "!"}</LoggedInUser>
      </Header>
      <Title>Escolha uma mesa para gerenciar pedidos</Title>
      <TableContainer data={data} />
    </>
  );
};
export async function getServerSideProps() {
  const data = await TablesService.index();

  return { props: { data } };
}
export default Tables;

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
  line-height: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;

  ${media.lessThan("medium")`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px;
    margin-bottom: 6px;

  `}
`;
