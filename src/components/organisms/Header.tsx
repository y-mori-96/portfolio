import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <NavLink to="/">
            <Logo>
              ロゴ
            </Logo>
          </NavLink>
        </Div>

        <Div>
          <Nav>
            <List>
              <Item><StyledNavLink to="/about">私について</StyledNavLink></Item>
              <Item><StyledNavLink to="/works">制作物</StyledNavLink></Item>
              <Item><StyledNavLink to="/skills">スキル</StyledNavLink></Item>
              <Item><StyledNavLink to="/certifications">資格</StyledNavLink></Item>
              <Item><StyledNavLink to="/contact">お問い合わせ</StyledNavLink></Item>
            </List>
          </Nav>
        </Div>
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

const Div = styled.div`

`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;



const Nav = styled.nav`
  display: flex;
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 10px;
  font-size: 1em;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
`;