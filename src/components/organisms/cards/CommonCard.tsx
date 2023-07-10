import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 1200px) and (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardsItem = styled.div`
  max-width: 400px;
  height: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CardsItemHover = styled(CardsItem)`
  &:hover {
    cursor: pointer;
  }
`;


export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px #00000080;
  border-radius: 4px;
  padding: 0.8rem;

  @media (max-width: 768px) {
    height: 100%;
    padding: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;/* TableData内も変更する */

  &:last-child {
    border-bottom: none;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderTitle = styled(TableHeader)`
  max-width: 300px;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const TableHeaderData = styled(TableHeader)`
  width: 100px;
  text-align: left;
`;

export const TableData = styled.td`
  padding: 1rem;/* TableHeader内も変更する */
  text-align: left;
  line-height: 1.5;
`;