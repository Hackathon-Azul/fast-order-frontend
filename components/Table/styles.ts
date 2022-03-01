import styled from "styled-components";
import media from "styled-media-query";

export const TableItem = styled.a`
  background-color: #ffffff;
  color: var(--custom-blue);
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  height: 150px;
  margin: 15px 0;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    width: 78px;
    height: 77px;
    margin: 5px 0;
    font-size: 13px;
    line-height: 15px;
    text-align: center; 
  
  `}
 

  :hover {
    background-color: var(--custom-orange);
    color: #ffffff;
  }
`;
