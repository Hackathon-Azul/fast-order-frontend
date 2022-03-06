import Header from "components/Header";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { BsChevronLeft } from "react-icons/bs";

type Props = {
  table: number;
  order: number;
};
const Update: React.FC<Props> = ({ table, order }) => {
  console.log(table, order);
  return (
    <>
      <Header>
        <Link href="/tables">
          <a style={{ color: "white", textDecoration: "none" }}>
            <BsChevronLeft size="36" />
          </a>
        </Link>
        <span>Mesa {table}</span>
      </Header>
      <Container></Container>
    </>
  );
};

export async function getServerSideProps({ query }) {
  return {
    props: {
      table: query.table,
      order: query.order,
    },
  };
}

export default Update;
