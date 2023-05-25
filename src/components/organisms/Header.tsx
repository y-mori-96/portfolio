import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// コンポーネント
import Nav from './Nav';

const Header = () => {
  return (
    <>
      <Wrapper>
        <NavLink to="/">
          <Logo>
            ロゴ
          </Logo>
        </NavLink>

        <Nav />
      </Wrapper>
    </>
  );
}

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  border: 1px solid black;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;