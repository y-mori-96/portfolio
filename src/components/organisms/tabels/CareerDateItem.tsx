import React from 'react';
import styled from 'styled-components';

interface CarrerDateItemProps {
  inDate: Date;
  inState: string;
  outDate: Date;
  outState: string;
  period: string;
}

const CarrerDateItem: React.FC<CarrerDateItemProps> = ({ inDate, inState, outDate, outState, period }) => {
  const inDateText = `${inDate.getFullYear()}年${inDate.getMonth() + 1}月${inDate.getDate()}日`;
  const outDateText = `${outDate.getFullYear()}年${outDate.getMonth() + 1}月${outDate.getDate()}日`;

  return (
    <Table>
      <Tbody>
        <TableRow>
          <TableDataDate>{inDateText}</TableDataDate>
          <TableDataState>{inState}</TableDataState>
        </TableRow>
        <TableRow>
          <TableDataDate>{outDateText}</TableDataDate>
          <TableDataState>{outState}</TableDataState>
        </TableRow>
        <TableRow>
          <TableDataDate>{period}</TableDataDate>
          <TableDataState>在籍</TableDataState>
        </TableRow>
      </Tbody>
    </Table>
  );
};

export default CarrerDateItem;

const Table = styled.table`
  font-size: 1.25rem;
  width: 100%;
`;

const Tbody = styled.tbody`
  @media (max-width: 1200px) and (min-width: 601px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

const TableRow = styled.tr`
  &:nth-child(2) {
    border-bottom: 1px solid black;
  }

  @media (max-width: 1200px) and (min-width: 601px) {
    display: flex;
    flex-direction: column-reverse;

    &:nth-child(2) {
      border-bottom: none;
    }
  }
`;

const TableDataDate = styled.td`
  text-align: left;
  padding: 0.5rem;

  @media (max-width: 1200px) and (min-width: 601px) {
    text-align: center;
  }
`;
const TableDataState = styled.td`
  text-align: right;
  padding: 0.5rem;

  @media (max-width: 1200px) and (min-width: 601px) {
    text-align: center;
    border-bottom: 1px solid black;
  }
`;