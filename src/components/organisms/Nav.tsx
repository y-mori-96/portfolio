import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface ListProps {
  isOpen: boolean;
}

interface BurgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerIcon isOpen={isOpen} onClick={toggleMenu}>
        <BurgerIconBar />
        <BurgerIconBar />
        <BurgerIconBar />
      </BurgerIcon>

      <List isOpen={isOpen}>
        <Item><StyledNavLink to="/about">私について</StyledNavLink></Item>
        <Item><StyledNavLink to="/works">制作物</StyledNavLink></Item>
        <Item><StyledNavLink to="/skills">スキル</StyledNavLink></Item>
        <Item><StyledNavLink to="/certifications">資格</StyledNavLink></Item>
        <Item><StyledNavLink to="/contact">お問い合わせ</StyledNavLink></Item>
      </List>
    </>
  );
}

export default Nav;

// const List = styled.ul`
//   display: flex;
// `;

const List = styled.ul<ListProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Item = styled.li`
  margin-right: 1rem;
  font-size: 1.5em;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
`;


const BurgerIcon = styled.div<BurgerIconProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 20px;
`;

const BurgerIconBar = styled.span`
  width: 100%;
  height: 2px;
  background-color: #000;
  margin-bottom: 4px;
`;
