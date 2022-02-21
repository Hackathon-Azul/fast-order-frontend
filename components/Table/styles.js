import styled from "styled-components";

export const TableItem = styled.a`
  background-color: #ffffff;
  color: var(--custom-blue);
  border-radius: 5px;
  padding: 10px;
  width: 78px;
  height: 77px;
  margin: 5px 0;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  

  :hover {
    background-color: var(--custom-orange);
    color: #ffffff;
  }
`