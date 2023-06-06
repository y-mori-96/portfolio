// スタイル
import styled from 'styled-components';
// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import WorksList from '../organisms/WorksList'

const Works = () => {
  return (
    <>
      <PageTitle title="制作物" />
      <DevelopmentType>
        <DevelopmentTypeTitle>個人開発</DevelopmentTypeTitle>
      </DevelopmentType>
      <WorksList />
    </>
  )
}

export default Works

/**
 * スタイル
 */
const DevelopmentType = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;
const DevelopmentTypeTitle = styled.h3`
  font-size: 2rem;
`;