import { TableItem } from "./styles"

const Table = ({children, onClick}) => {
  return (
        <TableItem onClick={onClick}>{children}</TableItem>
  )
}

export default Table