import Header from "components/Header";
import { TableContainerTag } from "components/TableContainer/styles";
import withAuth from "components/withAuth";
import Link from "next/link";
import { Button, Container, Table } from "react-bootstrap";
import { BsChevronLeft, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
import OrderService from "services/order";
import useSwr from "swr";
import media from "styled-media-query";
import styled from "styled-components";
import Loader from "components/Loader";

type Props = {
  table?: number;
  order?: number;
};

const Update: React.FC<Props> = ({ table, order }) => {
  const { data, error } = useSwr(
    `/storefront/v1/orders/${order}`,
    OrderService.show
  );

  if (error) {
    toast.error("Erro ao obter dados do pedido");
    console.log(error);
  }

  return (
    <Wrapper>
      <Header>
        <Link href="/tables">
          <a style={{ color: "white", textDecoration: "none" }}>
            <BsChevronLeft size="36" />
          </a>
        </Link>
        <span>Mesa {table}</span>
      </Header>
      {!data ? (
        <Loader />
      ) : (
        <Container>
          <p> Items do pedido de {data?.client_name}</p>
          <TableContainerTag>
            <Table responsive>
              <thead>
                <tr style={{ color: "white" }}>
                  <th>Quantidade</th>
                  <th>Produto</th>
                  <th>Subtotal</th>
                  <th>Ações</th>
                </tr>
              </thead>
              {data?.order_items_attributes.map((order) => (
                <tbody key={order.id}>
                  <tr style={{ color: "white" }}>
                    <td>{order.quantity}</td>
                    {console.log(order.products)}

                    <td>{order.products.name}</td>
                    <td>{order.products.price * order.quantity}</td>
                    <td>
                      <BsTrash
                        color="white"
                        onClick={() => {}}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </TableContainerTag>
          <Button variant="custom-orange">
            NOVO PEDIDO P/{" "}
            {data?.client_name?.split(" ")[0]
              ? data?.client_name?.split(" ")[0].toUpperCase()
              : data?.client_name?.toUpperCase()}
          </Button>
        </Container>
      )}
    </Wrapper>
  );
};

export async function getServerSideProps(ctx) {
  const authToken = ctx.req.cookies["%40api-data"];

  if (!authToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { table: ctx.query.table, order: ctx.query.order } };
}

export default withAuth(Update);

const Wrapper = styled.div`
  p {
    text-align: center;
    margin-top: 2vw;
    font-size: 15px;
  }

  button {
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: white;
    font-size: 15px;
  }

  ${media.greaterThan("medium")`
  .table-responsive {
      width: 70%;
  }
  p {
    font-size: 25px;

  }
  
    `}
`;
