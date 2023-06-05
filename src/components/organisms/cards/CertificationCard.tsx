import React from 'react';
// コンポーネント
import { Table, TableHeaderTitle, TableHeaderData, TableData, CardContainer } from './CommonCard';

/**
 * 型定義
 */
type CertificationCardProps = {
  title: string;
  date: string;
  comment: string;
};

/**
 * コンポーネント定義
 */
const CertificationCard = ({ title, date, comment }: CertificationCardProps ) => {
  return (
    <CardContainer>
      <div>
        <Table>
          <tbody>
            <tr>
              <TableHeaderTitle colSpan={2}>
                {title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </TableHeaderTitle>
            </tr>
            <tr>
              <TableHeaderData>取得年</TableHeaderData>
              <TableData>{date}</TableData>
            </tr>
            <tr>
              <TableHeaderData colSpan={2}>
                {comment.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </TableHeaderData>
            </tr>
          </tbody>
        </Table>
      </div>
    </CardContainer>
  );
};

export default CertificationCard;