import React from "react";
import { WorkData } from '../../types/WorkData';
import { DL, DT, DD } from "./StyledWorkModal";

/**
 * 型定義
 */
type Props = Pick<WorkData, 'problem' | 'solution' | 'target' | 'goal' | 'technologySelection'>;

/**
 * コンポーネント定義
 */
const WorkModaBackground: React.FC<Props> = ({
  problem,
  solution,
  target,
  goal,
  technologySelection,
}) => {
  return (
    <DL>
      <DT>悩み・課題</DT>
      <DD>
        {problem.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>

      <DT>課題解決に向けて</DT>
      <DD>
        {solution.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>

      <DT>技術選定</DT>
      <DD>
        {technologySelection.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>

      <DT>ターゲット</DT>
      <DD>{target}</DD>

      <DT>サイトの目的</DT>
      <DD>{goal}</DD>
    </DL>
  );
};

export default WorkModaBackground;