import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// コンポーネント
import Nav from './Nav';

const Header = () => {
  return (
    <>
      <Wrapper>
        <h1>
          <NavLink to="/">
            <Logo>
              ロゴ
            </Logo>
          </NavLink>
        </h1>

        <Nav />
      </Wrapper>
    </>
  );
}

export default Header

/**
 * スタイル
 */
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 80px; /* レスポンシブ時のナビの高さを合わせる */

  border: 1px solid black;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;