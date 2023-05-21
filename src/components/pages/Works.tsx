// スタイル
import styled from 'styled-components';
// コンポーネント
import Title from '../../atoms/Title'
import WorksList from '../organisms/WorksList'

const Works = () => {
  return (
    <>
      <Title title="制作物" />
      <Test>
        <Header3>個人開発</Header3>
      </Test>
      <WorksList />
    </>
  )
}

export default Works

/**
 * スタイル
 */
/** カード
 **************************************/
const Test = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;
const Header3 = styled.h3`
  font-size: 2rem;
`;