// スタイル
import {Wrapper, P} from './StyledPrivates';
// コンポーネント
import PrivateTitle from '../../atoms/Titles/PrivateTitle'

const Boardgame = () => {
  return (
    <>
      <PrivateTitle title="ボードゲーム" />
      <Wrapper>
        <P>現在、〇個所持</P>
      </Wrapper>
      <Wrapper>
        <P>ルールが簡単で、老若男女問わず誰でも遊べ、経験差が出ない点に魅力を感じる</P>
      </Wrapper>
      <Wrapper>
        <P>分かりやすくルールを説明する能力など、<br/>仕事に必要な能力も養うことができる</P>
      </Wrapper>
    </>
  )
}

export default Boardgame