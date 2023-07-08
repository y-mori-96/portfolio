import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// コンポーネント
import GlobalNav from './GlobalNav';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1>
          <NavLink to="/">
            <StyledLogo>
              <Img src={Logo} alt="森　湧汰" />
            </StyledLogo>
          </NavLink>
        </h1>

        <GlobalNav />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header

/**
 * スタイル
 */
const StyledHeader = styled.header`
  background-color: #fff;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;
  height: 80px;
  padding: 10px 0;

  display: flex;
  align-items: center;
`;
const StyledLogo = styled.div`
  width: 60px;
  height: 60px;
`;

const Img = styled.img`
  width: 100%;
`;