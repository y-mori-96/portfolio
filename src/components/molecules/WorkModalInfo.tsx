import React from "react";
import {DL, DT, DD} from "./StyledWorkModal";

/**
 * 型定義
 */
type Props = {
  release: string;
  period: string;
  responsible: string;
  technology: string;
  device: string;
};

/**
 * コンポーネント定義
 */
const WorkModalOutline: React.FC<Props> = ({
    release
   ,period
   ,responsible
   ,technology
   ,device
}) => {
  return (
    <DL>
      <DT>公開日</DT>
      <DD>{release}</DD>
      <DT>制作期間</DT>
      <DD>{period}</DD>
      <DT>担当領域</DT>
      <DD>{responsible}</DD>
      <DT>使用技術</DT>
      <DD>{technology}</DD>
      <DT>対応機種</DT>
      <DD>{device}</DD>
    </DL>
  );
};

export default WorkModalOutline;