import styled from 'styled-components';

/**
 * 型定義
 */
type Props = {
  imageSrc: string;
  title: string;
  dsescription: string;
  technology: string;
};

/**
 * コンポーネント定義
 */
const WorkCard = ({ imageSrc, title, dsescription, technology}: Props ) => {
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
              <TableData colSpan={2}>{dsescription}</TableData>
            </tr>
            <tr>
              <TableData colSpan={2}>{technology}</TableData>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </CardContainer>
  );
};

export default WorkCard;

/**
 * スタイル
 */
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px #00000080;
  border-radius: 4px;
  padding: 0.8rem;

  @media (max-width: 768px) {
    height: 100%;
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  max-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const CardBody = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;/* TableData内も変更する */

  &:last-child {
    border-bottom: none;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderTitle = styled(TableHeader)`
  max-width: 300px;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const TableHeaderData = styled(TableHeader)`
  width: 100px;
  text-align: left;
`;

export const TableData = styled.td`
  padding: 1rem;/* TableHeader内も変更する */
  text-align: left;
  line-height: 1.5;
`;