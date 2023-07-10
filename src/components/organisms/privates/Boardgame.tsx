import {Wrapper, Text} from './StyledPrivates';
import PrivateTitle from '../../atoms/Titles/PrivateTitle'

const Boardgame = () => {
  return (
    <>
      <PrivateTitle title="ボードゲーム" />
      <Wrapper>
        <Text>現在、63個所持</Text>
      </Wrapper>
      <Wrapper>
        <Text>
          ・簡単なルール<br />
          ・老若男女問わず誰でも遊べる<br />
          ・初心者でも勝てる<br />
          点に魅力を感じる
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>協力系や心理戦が楽しめるゲームが好き</Text>
      </Wrapper>
    </>
  )
}

export default Boardgame