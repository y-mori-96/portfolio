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
const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2rem;
`;

const CardHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  width: 300px;
`;

const CardBody = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;/* TableData内も変更する */
  border-bottom: 1px solid #ddd;
`;

const TableHeaderTitle = styled(TableHeader)`
  text-align: center;
  font-weight: bold;
`;

export const TableHeaderData = styled(TableHeader)`
  text-align: left;
`;

export const TableData = styled.td`
  padding: 1rem;/* TableHeader内も変更する */
  border-bottom: 1px solid #ddd;
`;