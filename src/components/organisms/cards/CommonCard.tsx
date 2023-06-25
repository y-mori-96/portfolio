import React from 'react';
import styled from 'styled-components';

/**
 * 型定義
 */
export type CommonCardProps = {
  imageSrc: string;
  title: string;
  children?: React.ReactNode; // childrenプロパティの追加
};

/**
 * コンポーネント定義
 */
const CommonCard: React.FC<CommonCardProps> = ({ imageSrc, title, children }) => {
  return (
    <CardContainer>
      <CardHeader>
        <Img src={imageSrc} alt={title} />
      </CardHeader>
      <CardBody>
        <Table>
          <tbody>
            <tr>
              <TableHeaderTitle colSpan={2}>{title}</TableHeaderTitle>
            </tr>
            {children}
          </tbody>
        </Table>
      </CardBody>
    </CardContainer>
  );
};

export default CommonCard;

/**
 * スタイル
 */
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 1200px) and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) and (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (max-width: 600px) and (min-width: 376px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardsItem = styled.div`
  max-width: 400px;

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
  background-color: #fff;
  box-shadow: 0 2px 4px #00000080;
  border-radius: 4px;
  padding: 0.8rem;

  @media (max-width: 768px) {
    height: 100%;
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  max-width: 300px;

  @media (max-width: 768px) and (min-width: 601px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const CardBody = styled.div`
  width: 100%;
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