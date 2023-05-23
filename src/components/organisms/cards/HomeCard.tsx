// コンポーネント
import SeeMoreButton from '../../atoms/buttons/SeeMoreButton';
import CommonCard, { CommonCardProps, TableHeaderTitle } from './CommonCard';

/**
 * 型定義
 */
type HomeCardProps = CommonCardProps & {
  url: string;
};

/**
 * コンポーネント定義
 */
const HomeCard = ({ imageSrc, title, url }: HomeCardProps ) => {
  return (
    <CommonCard imageSrc={imageSrc} title={title}>
      <tr>
        <TableHeaderTitle colSpan={2}>
          <SeeMoreButton url={url} />
        </TableHeaderTitle>
      </tr>
    </CommonCard>
  );
};

export default HomeCard;