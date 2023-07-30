import React from "react";
import { WorkData } from '../../types/WorkData';
import { DL, DT, DD } from "./StyledWorkModal";

/**
 * 型定義
 */
type Props = Pick<WorkData, 'howto'>;

/**
 * コンポーネント定義
 */
const WorkModaBackground: React.FC<Props> = ({
  howto,
}) => {
  return (
    <DL>
      <DD>
        {howto.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>
    </DL>
  );
};

export default WorkModaBackground;