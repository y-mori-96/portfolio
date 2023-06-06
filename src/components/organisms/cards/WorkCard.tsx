// コンポーネント
import CommonCard, { CommonCardProps, TableHeaderData, TableData } from './CommonCard';

/**
 * 型定義
 */
type WorkCardProps = CommonCardProps & {
  data: string;
  outline: string;
  skills: string;
};

/**
 * コンポーネント定義
 */
const WorkCard = ({ imageSrc, title, outline, data, skills }: WorkCardProps ) => {
  return (
    <CommonCard imageSrc={imageSrc} title={title}>
      <tr>
        <TableData colSpan={2}>{outline}</TableData>
      </tr>
      {/* <tr>
        <TableHeaderData>制作期間</TableHeaderData>
        <TableData>{data}</TableData>
      </tr>
      <tr>
        <TableHeaderData>使用技術</TableHeaderData>
        <TableData>{skills}</TableData>
      </tr> */}
    </CommonCard>
  );
};

export default WorkCard;