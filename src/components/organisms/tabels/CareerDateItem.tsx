import React from 'react';
import styled from 'styled-components';

interface CarrerDateItemProps {
  inDate: string;
  inState: string;
  outDate: string;
  outState: string;
  period: string;
}

const CarrerDateItem: React.FC<CarrerDateItemProps> = ({ inDate, inState, outDate, outState, period }) => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableCell>{inDate}</TableCell>
          <TableCell>{inState}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{outDate}</TableCell>
          <TableCell>{outState}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{period}</TableCell>
          <TableCell>在籍</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default CarrerDateItem;

const Table = styled.table`
  font-size: 1.25rem;
  width: 100%;
`;

const TableRow = styled.tr`
  &:nth-child(2) {
    border-bottom: 1px solid black;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;