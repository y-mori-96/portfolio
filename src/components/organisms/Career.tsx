// スタイル
import styled from 'styled-components';

const Carrer = () => {
  return (
    <>
      <Content>
          <div>
            <div>
              <ul>
                <li>
                  <InnerContent>
                    <div>
                      <ul>
                        <li>年入社</li>
                        <li>年退社</li>
                        <li>年在籍</li>
                      </ul>
                    </div>
                    <div>
                      <h3>三菱電機ホーム機器(株)</h3>
                      <p>炊飯器、掃除機、アプリ開発を行いました。</p>
                    </div>
                  </InnerContent>
                </li>

                <li>
                  <InnerContent>
                    <div>
                      <ul>
                        <li>年入社</li>
                        <li>年退社</li>
                        <li>年在籍</li>
                      </ul>
                    </div>
                    <div>
                      <h3>三菱電機ホーム機器(株)</h3>
                      <p>炊飯器、掃除機、アプリ開発を行いました。</p>
                    </div>
                  </InnerContent>
                </li>
              </ul>
            </div>
          </div>
        </Content>
    </>
  )
}

export default Carrer

/**
 * スタイル
 */
const Content = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: gray;
  padding: 1.5rem;
`;

const InnerContent = styled.div`
  display: flex;

  > div:first-child {
    margin-right: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;