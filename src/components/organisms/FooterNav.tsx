import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterNav = () => {
  return (
    <List>
      <li><StyledNavLink to="/">ホーム</StyledNavLink></li>
      <li><StyledNavLink to="/about">私について</StyledNavLink></li>
      <li><StyledNavLink to="/works">制作物</StyledNavLink></li>
      <li><StyledNavLink to="/skills">スキル</StyledNavLink></li>
      <li><StyledNavLink to="/certifications">資格</StyledNavLink></li>
      <li><StyledNavLink to="/contact">お問い合わせ</StyledNavLink></li>
    </List>
  );
}

export default FooterNav;

/**
 * スタイル
 */
const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 559px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;

    margin-bottom: 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`;