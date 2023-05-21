// コンポーネント
import CommonCard, { CommonCardProps, TableHeaderData, TableData } from './CommonCard';

/**
 * 型定義
 */
type CertificationCardProps = CommonCardProps & {
  date: string;
};

/**
 * コンポーネント定義
 */
const CertificationCard = ({ imageSrc, title, date }: CertificationCardProps ) => {
  return (
    <CommonCard imageSrc={imageSrc} title={title}>
      <tr>
        <TableHeaderData>取得年</TableHeaderData>
        <TableData>{date}</TableData>
      </tr>
    </CommonCard>
  );
};

export default CertificationCard;