import { TableContainerTag } from "./styles"
import Table from "../Table"
import Modal from "../TableOptions"
import { useState } from "react"
import { FaTimesCircle } from "react-icons/fa";

const TableContainer = () => {

  const [show, setShow] = useState(false)
  const [number, setNumber] = useState('')

  function handleClick(e){
    setShow(!show)
    setNumber(e.target.text)
  }

  return (
    <>
      {show && <Modal>{number} <span onClick={() => setShow(false)}><FaTimesCircle size="28" /></span></Modal>}
      <TableContainerTag>
        <Table onClick={handleClick}>Mesa 001</Table>
        <Table onClick={handleClick}>Mesa 002</Table>
        <Table onClick={handleClick}>Mesa 003</Table>
        <Table onClick={handleClick}>Mesa 004</Table>
        <Table onClick={handleClick}>Mesa 005</Table>
        <Table onClick={handleClick}>Mesa 006</Table>
        <Table onClick={handleClick}>Mesa 007</Table>
        <Table onClick={handleClick}>Mesa 008</Table>
        <Table onClick={handleClick}>Mesa 009</Table>
        <Table onClick={handleClick}>Mesa 010</Table>
        <Table onClick={handleClick}>Mesa 011</Table>
        <Table onClick={handleClick}>Mesa 012</Table>
        <Table onClick={handleClick}>Mesa 013</Table>
        <Table onClick={handleClick}>Mesa 014</Table>
        <Table onClick={handleClick}>Mesa 015</Table>
        <Table onClick={handleClick}>Mesa 016</Table>
        <Table onClick={handleClick}>Mesa 017</Table>
        <Table onClick={handleClick}>Mesa 018</Table>
        <Table onClick={handleClick}>Mesa 019</Table>
        <Table onClick={handleClick}>Mesa 020</Table>
        <Table onClick={handleClick}>Mesa 021</Table>
        <Table onClick={handleClick}>Mesa 022</Table>
        <Table onClick={handleClick}>Mesa 023</Table>
        <Table onClick={handleClick}>Mesa 024</Table>
        <Table onClick={handleClick}>Mesa 025</Table>
        <Table onClick={handleClick}>Mesa 026</Table>
        <Table onClick={handleClick}>Mesa 027</Table>
        <Table onClick={handleClick}>Mesa 028</Table>
      </TableContainerTag>
    </>
  )
}

export default TableContainer