import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 型
 */
type ListProps = {
  isOpen: boolean;
}

type ItemProps = {
  isOpen: boolean;
  onClick: () => void;
}

type BurgerIconProps = {
  onClick: () => void;
}

type BurgerIconBarProps = {
  isOpen: boolean;
}

/**
 * コンポーネント
 */
const GlobalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNav>
        <BurgerIcon onClick={toggleMenu}>
          <BurgerIconBar isOpen={isOpen} />
          <BurgerIconBar isOpen={isOpen} />
          <BurgerIconBar isOpen={isOpen} />
        </BurgerIcon>

        <List isOpen={isOpen}>
          <Item isOpen={isOpen} onClick={toggleMenu}><StyledNavLink to="/about">私について</StyledNavLink></Item>
          <Item isOpen={isOpen} onClick={toggleMenu}><StyledNavLink to="/works">制作物</StyledNavLink></Item>
          <Item isOpen={isOpen} onClick={toggleMenu}><StyledNavLink to="/skills">スキル</StyledNavLink></Item>
          <Item isOpen={isOpen} onClick={toggleMenu}><StyledNavLink to="/certifications">資格</StyledNavLink></Item>
          {/* <Item isOpen={isOpen} onClick={toggleMenu}><StyledNavLink to="/contact">お問い合わせ</StyledNavLink></Item> */}
          <Item isOpen={isOpen} onClick={toggleMenu}><StyledNavLink to="/script/mailform/contact/">お問い合わせ</StyledNavLink></Item>
        </List>

      </StyledNav>
    </>
  );
}

export default GlobalNav;

/**
 * スタイル
 */
const StyledNav = styled.nav`
  margin: 0 0 0 auto;
`;

const List = styled.ul<ListProps>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'flex')};
    flex-direction: column;
    gap: 0;

    position: absolute;
    top: 80px; /*ヘッダーの高さ*/
    right: 0;

    z-index: 5;
  }
`;

const Item = styled.li<ItemProps>`
  font-size: 1.5em;

  @media (max-width: 768px) {
    margin-right: 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100vw;
    height: 20vh;
    text-align: center;
    background-color: #85A389;
    border: 1px solid #fff;

    &:hover {
      background-color: #aec7b2;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }
`;


const BurgerIcon = styled.div<BurgerIconProps>`
  display: none;

  @media (max-width: 768px) {
    cursor: pointer;

    position: relative;

    display: block;
    width: 40px;
    height: 30px;
  }
`;

const BurgerIconBar = styled.span<BurgerIconBarProps>`
  @media (max-width: 768px) {
    width: 100%;
    height: 4px;
    border-radius: 100px;
    background-color: #85A389;

    position: absolute;

    &:nth-child(1) {
      top: ${({ isOpen }) => (isOpen ? '50%' : '0')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
    }

    &:nth-child(2) {
      top: 50%;
      display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    }

    &:nth-child(3) {
      top: ${({ isOpen }) => (isOpen ? '50%' : '100%')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
    }
  }
`;
