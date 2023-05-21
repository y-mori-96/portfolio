// 型
import { SkillCategoriesValue } from '../../../types/skillCategories';
// コンポーネント
import CommonCard, { CommonCardProps, TableHeaderData, TableData } from './CommonCard';

/**
 * 型定義
 */
type SkillCardProps = CommonCardProps & {
  level: string;
  categories: SkillCategoriesValue;
};

/**
 * コンポーネント定義
 */
const SkillCard = ({ imageSrc, title, level, categories }: SkillCardProps ) => {
  return (
    <CommonCard imageSrc={imageSrc} title={title}>
      <tr>
        <TableHeaderData>経験</TableHeaderData>
        <TableData>{level}</TableData>
      </tr>
      <tr>
        <TableHeaderData>カテゴリ</TableHeaderData>
        <TableData>{categories}</TableData>
      </tr>
    </CommonCard>
  );
};

export default SkillCard;