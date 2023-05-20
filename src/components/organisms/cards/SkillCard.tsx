import styled from 'styled-components';
// 型
import { SkillCategoriesValue } from '../../../types/skillCategories';

/**
 * 型定義
 */
type SkillCardProps = {
  imageSrc: string;
  title: string;
  level: string;
  categories: SkillCategoriesValue;
};

/**
 * コンポーネント定義
 */
const SkillCard = ({ imageSrc, title, level, categories }: SkillCardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <Img src={imageSrc} alt={title} />
      </CardHeader>
      <CardBody>
        <Table>
          <tbody>
            <tr>
              <TableHeaderTitle colSpan={2}>{title}</TableHeaderTitle>
            </tr>
            <tr>
              <TableHeaderData>開発経験</TableHeaderData>
              <TableData>{level}</TableData>
            </tr>
            <tr>
              <TableHeaderData>カテゴリ</TableHeaderData>
              <TableData>{categories}</TableData>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </CardContainer>
  );
};

export default SkillCard;

/**
 * スタイル
 */
const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2rem;
`;

const CardHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  width: 300px;
`;

const CardBody = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;/* TableData内も変更する */
  border-bottom: 1px solid #ddd;
`;

const TableHeaderTitle = styled(TableHeader)`
  text-align: center;
  font-weight: bold;
`;
const TableHeaderData = styled(TableHeader)`
  text-align: left;
`;

const TableData = styled.td`
  padding: 1rem;/* TableHeader内も変更する */
  border-bottom: 1px solid #ddd;
`;