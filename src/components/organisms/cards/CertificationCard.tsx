import styled from 'styled-components';
// コンポーネント
import CommonCard, { CommonCardProps, Table, TableHeaderTitle, TableHeaderData, TableData, CardContainer } from './CommonCard';

/**
 * 型定義
 */
type CertificationCardProps = {
  title: string;
  date: string;
};

/**
 * コンポーネント定義
 */
const CertificationCard = ({ title, date }: CertificationCardProps ) => {
  return (
    <CardContainer>
      <div>
        <Table>
          <tbody>
            <tr>
              <TableHeaderTitle colSpan={2}>{title}</TableHeaderTitle>
            </tr>
            <tr>
              <TableHeaderData>取得年</TableHeaderData>
              <TableData>{date}</TableData>
            </tr>
          </tbody>
        </Table>
      </div>
    </CardContainer>
  );
};

export default CertificationCard;