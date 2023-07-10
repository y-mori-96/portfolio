import {Wrapper, Text} from './StyledPrivates';
import PrivateTitle from '../../atoms/Titles/PrivateTitle'

const Travel = () => {
  return (
    <>
      <PrivateTitle title="海外旅行" />
      <Wrapper>
        <Text>カバン一つで世界各国を飛び回るバックパッカー</Text>
        <Text>現在、28ヶ国訪問中</Text>
      </Wrapper>
      <Wrapper>
        <Text>エアーズロックやマチュピチュなど自然が大好き</Text>
      </Wrapper>
      <Text>2020年1月1日<br/>キリマンジャロ登頂を果たす</Text>
    </>
  )
}

export default Travel