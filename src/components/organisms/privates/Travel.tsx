// スタイル
import {Wrapper, P} from './StyledPrivates';
// コンポーネント
import PrivateTitle from '../../atoms/Titles/PrivateTitle'

const Travel = () => {
  return (
    <>
      <PrivateTitle title="海外旅行" />
      <Wrapper>
        <P>カバン一つで世界各国を飛び回るバックパッカー</P>
        <P>現在、28ヶ国訪問中</P>
      </Wrapper>
      <Wrapper>
        <P>エアーズロックやマチュピチュなど自然が大好き</P>
      </Wrapper>
      <P>2020年1月1日<br/>キリマンジャロ登頂を果たす</P>
    </>
  )
}

export default Travel