// コンポーネント
import CommonCard, { CommonCardProps, TableHeaderData, TableData } from './CommonCard';

/**
 * 型定義
 */
type Props = CommonCardProps & {
  dsescription: string;
};

/**
 * コンポーネント定義
 */
const WorkCard = ({ imageSrc, title, dsescription, }: Props ) => {
  return (
    <CommonCard imageSrc={imageSrc} title={title}>
      <tr>
        <TableData colSpan={2}>{dsescription}</TableData>
      </tr>
    </CommonCard>
  );
};

export default WorkCard;