import styled from "styled-components";

import { Row } from "react-bootstrap";

export const AccordionHeader = styled.div`
  padding: 5px 10px;
  text-align: left;
  /* background-color: #28a745; */
  border-left: 1px solid rgba(187, 194, 201, 0.5);
  border-right: 1px solid rgba(187, 194, 201, 0.5);
  border-bottom: 1px solid rgba(187, 194, 201, 0.5);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: black;
  font-size: 1rem;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(52, 58, 64, 0.2);
    border: 1px solid rgba(187, 194, 201, 0.5);
  }
`;

export const ItemHeader = styled.div`
  background-color: rgba(52, 58, 64, 0.5);
  display: flex;

  & div {
    padding: 7px;
    text-align: left;
    width: 50%;
    padding: 3px 10px;
    font-size: 1.25rem;
    color: rgba(52, 58, 64, 1);
  }
`;

export const ItemContent = styled.div`
  display: flex;
  background-color: rgba(187, 194, 201, 0.5);

  & div {
    width: 50%;
    text-align: left;
    padding: 3px 10px;
  }
`;

export const ItemWrapper = styled.div`
  padding: 3px;
  border-bottom: 0.5px solid rgba(187, 194, 201, 0.9);
  border-left: 0.5px solid rgba(187, 194, 201, 0.9);
  border-right: 0.5px solid rgba(187, 194, 201, 0.9);
`;

export const ItemText = styled.p`
  line-height: 40px;
  margin: 0;
`;
