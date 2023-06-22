import React from "react";
import styled from "styled-components";

/**
 * 型定義
 */
type Props = {
  release: string;
  period: string;
  technology: string;
  device: string;
};

/**
 * コンポーネント定義
 */
const WorkModalOutline: React.FC<Props> = ({
    release
   ,period
   ,technology
   ,device
}) => {
  return (
    <DL>
      <DT>公開日</DT>
      <DD>{release}</DD>
      <DT>制作期間</DT>
      <DD>{period}</DD>
      <DT>使用技術</DT>
      <DD>{technology}</DD>
      <DT>対応機種</DT>
      <DD>{device}</DD>
    </DL>
  );
};

export default WorkModalOutline;

/**
 * スタイル
 */
const DL = styled.dl`
  width: 100%;

  padding: 0 3rem;
  margin-bottom: 2rem;
  `;
const DT = styled.dt`
  font-size: 1.5rem;
  border-bottom: 1px solid #000;
  margin-bottom: 0.75rem;
`;
const DD = styled.dd`
  font-size: 2rem;
  margin-bottom: 2rem;
`;