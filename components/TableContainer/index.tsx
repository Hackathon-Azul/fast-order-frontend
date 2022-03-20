import { TableContainerTag } from "./styles";
import Table from "../Table";
import Modal from "../TableOptions";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import TableType from "dtos/Table";
import Order from "dtos/Order";
import Loader from "components/Loader";

type Props = {
  data: TableType[];
  orders: Order[]
};
const TableContainer = ({ data, orders }: Props) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");

  function handleClick(e) {
    setShow(!show);
    setNumber(e.target.text);
  }

  const element = data?.find(
    (item) => item.table_number.toString() === number.split(" ")[1]
  );
  const avaliable = element && element.avaliable_table;

  return (
    <>
      {show && (
        <Modal
          orders={orders}
          number={number}
          disabled={avaliable}
        >
          {number}
          <span onClick={() => setShow(false)}>
            <FaTimesCircle size="28" />
          </span>
        </Modal>
      )}
      {!data ? (
        <Loader />
      ) : (
        <TableContainerTag>
          {data?.map((table) => (
            <Table key={table.id} onClick={handleClick}>
              Mesa {table.table_number}
            </Table>
          ))}
        </TableContainerTag>
      )}
    </>
  );
};

export default TableContainer;
