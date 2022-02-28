import { TableContainerTag } from "./styles";
import Table from "../Table";
import Modal from "../TableOptions";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import TablesService from "services/tables";
import useSWR from "swr";
import { toast } from "react-toastify";
import TableType from "dtos/Table";

type Props = {
  data: [TableType]
}
const TableContainer = ({ data }: Props) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");

  function handleClick(e) {
    setShow(!show);
    setNumber(e.target.text);
  }


  return (
    <>
      {show && (
        <Modal number={number}>
          {number}
          <span onClick={() => setShow(false)}>
            <FaTimesCircle size="28" />
          </span>
        </Modal>
      )}
      <TableContainerTag>
        {data.map((table) => (
          <Table key={table.id} onClick={handleClick}>
            Mesa {table.table_number}
          </Table>
        ))}
      </TableContainerTag>
    </>
  );
};

export default TableContainer;
