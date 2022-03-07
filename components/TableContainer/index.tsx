import { TableContainerTag } from "./styles";
import Table from "../Table";
import Modal from "../TableOptions";
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import TableType from "dtos/Table";
import OrderService from "services/order";
import OrdersList from "dtos/OrdersList";
import Order from "dtos/Order";

type Props = {
  data: TableType[];
};
const TableContainer = ({ data }: Props) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [orders, setOrders] = useState<OrdersList[]>();

  useEffect(() => {
    async function fetchData() {
      const orders = await OrderService.index();
      setOrders(orders);
    }
    fetchData();
  }, []);

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
          orders={orders as unknown as [Order]}
          number={number}
          disabled={avaliable}
        >
          {number}
          <span onClick={() => setShow(false)}>
            <FaTimesCircle size="28" />
          </span>
        </Modal>
      )}
      <TableContainerTag>
        {data?.map((table) => (
          <Table key={table.id} onClick={handleClick}>
            Mesa {table.table_number}
          </Table>
        ))}
      </TableContainerTag>
    </>
  );
};

export default TableContainer;
