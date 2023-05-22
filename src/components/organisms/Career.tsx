// スタイル
import styled from 'styled-components';
// コンポーネント
import CarrerTitle from '../atoms/Titles/CarrerTitle'
import CarrerDateItem from './tabels/CareerDateItem';


const Carrer = () => {
  return (
    <>
      <ul>
        <CarrerItem>
          <InnerContent>
            <Header>
              <ul>
                <CarrerDateItem
                  inDate="2019年4月"
                  inState="入社"
                  outDate="2023年11月"
                  outState="退職"
                  period="3年10ヶ月"
                />
              </ul>
            </Header>
            <Body>
              <CarrerTitle title='三菱電機ホーム機器株式会社' />
              <Text>家電製品（炊飯器・掃除機）のソフトウェア開発</Text>
              <Text>家電製品（炊飯器・掃除機）のソフトウェア開発</Text>
              <Text>家電製品（炊飯器・掃除機）のソフトウェア開発</Text>
              <Text>アプリ開発の保守</Text>
            </Body>
          </InnerContent>
        </CarrerItem>

        <CarrerItem>
          <InnerContent>
            <Header>
              <ul>
                <CarrerDateItem
                  inDate="2019年4月"
                  inState="入社"
                  outDate="2023年11月"
                  outState="退職"
                  period="3年10ヶ月"
                />
              </ul>
            </Header>
            <Body>
              <CarrerTitle title='三菱電機ホーム機器株式会社' />
              <Text>家電製品（炊飯器・掃除機）のソフトウェア開発</Text>
              <Text>アプリ開発の保守</Text>
            </Body>
          </InnerContent>
        </CarrerItem>
      </ul>
    </>
  )
}

export default Carrer

/**
 * スタイル
 */
const CarrerItem = styled.li`
  margin-bottom: 2rem;

  li:last-child {
    margin-bottom: 0;
  }

  /* border: 1px solid black; */
  /* background-color: white; */
  `;

const InnerContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  /* width: 80%; */
  /* border: 1px solid black; */
`;

const Header = styled.div`
  padding: 1rem;

  /* border: 1px solid black;
  background-color: gray; */
  `;

const Body = styled.div`
  padding: 1rem;

  /* border: 1px solid black;
  background-color: gray; */
`;

const Text = styled.p`
  font-size: 1.5rem;
`;