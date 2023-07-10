import React from 'react';
import { SkillData } from '../../../types/SkillData';
import { Table, TableRow, TableHeaderTitle, TableData, CardContainer } from './CommonCard';

/**
 * 型定義
 */
type PickSkillData = Pick<SkillData, 'title' | 'experience' | 'dsescription'>

/**
 * コンポーネント定義
 */
const SkillCard = ({ title, experience, dsescription }: PickSkillData) => {
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
            <TableRow>
              <TableData colSpan={2}>{experience}</TableData>
            </TableRow>
            <tr>
              <TableData colSpan={2}>
                {dsescription.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </TableData>
            </tr>
          </tbody>
        </Table>
      </div>
    </CardContainer>
  );
};

export default SkillCard;