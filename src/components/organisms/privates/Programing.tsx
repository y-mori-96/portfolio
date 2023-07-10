import {Wrapper, Text} from './StyledPrivates';
import PrivateTitle from '../../atoms/Titles/PrivateTitle';

const Programing = () => {
  return (
    <>
      <PrivateTitle title="プログラミング"/>
      <Wrapper>
        <Text>日々、個人開発や資格勉強に励む</Text>
      </Wrapper>
      <Wrapper>
        <Text>
          フロントからバック、デザインなど<br />
          複数の知識を持ち合わせ、<br />
          「一人でECサイトを構築できる」<br />
          Webエンジニアを目指す。
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>新しい知識を得る際は、<br/>書籍を買い漁り、動画学習サイトも活用する</Text>
      </Wrapper>
    </>
  )
}

export default Programing