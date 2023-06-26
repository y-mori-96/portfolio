// スタイル
import {Wrapper, P} from './StyledPrivates';
// コンポーネント
import PrivateTitle from '../../atoms/Titles/PrivateTitle'

const Programing = () => {
  return (
    <>
      <PrivateTitle title="プログラミング"/>
      <Wrapper>
        <P>日々、個人開発や資格勉強に励む</P>
      </Wrapper>
      <Wrapper>
        <P>新しい分野や言語を学習していき、<br/>技術力のレベル上げを楽しんでいる</P>
      </Wrapper>
      <Wrapper>
        <P>新しい知識を得る際は、<br/>書籍を買い漁り、動画学習サイトも活用する</P>
      </Wrapper>
    </>
  )
}

export default Programing