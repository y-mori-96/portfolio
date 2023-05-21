// コンポーネント
import CommonCard, { CommonCardProps, TableHeaderData, TableData } from './CommonCard';

/**
 * 型定義
 */
type WorkCardProps = CommonCardProps & {
  data: string;
  skills: string;
  outline: string;
};

/**
 * コンポーネント定義
 */
const SkillCard = ({ imageSrc, title, outline, data, skills }: WorkCardProps ) => {
  return (
    <CommonCard imageSrc={imageSrc} title={title}>
      <tr>
        <TableHeaderData>概要</TableHeaderData>
        <TableData>{outline}</TableData>
      </tr>
      <tr>
        <TableHeaderData>制作期間</TableHeaderData>
        <TableData>{data}</TableData>
      </tr>
      <tr>
        <TableHeaderData>使用技術</TableHeaderData>
        <TableData>{skills}</TableData>
      </tr>
    </CommonCard>
  );
};

export default SkillCard;