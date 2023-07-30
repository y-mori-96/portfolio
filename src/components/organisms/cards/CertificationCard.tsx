import React from 'react';
import { CertificationData } from '../../../types/CertificationData';
import { CardContainer, Table, TableHeaderTitle, TableHeaderData, TableData } from './CommonCard';

/**
 * コンポーネント定義
 */
const CertificationCard = ({ title, date, comment }: CertificationData ) => {
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