import React, { useState } from 'react';
// スタイル
import styled from 'styled-components';
// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import Career from '../organisms/Career';
import Private from '../organisms/Private';

const About = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id: number) {
    setToggle(id);
  }

  return (
    <>
      <PageTitle title="私について" />

      <TabContainer>
        <TabItems active={toggle === 1} onClick={() => updateToggle(1)}>
          経歴
        </TabItems>
        <TabItems active={toggle === 2} onClick={() => updateToggle(2)}>
          プライベート
        </TabItems>
      </TabContainer>

      <Content active={toggle === 1}>
        <Career />
      </Content>

      <Content active={toggle === 2}>
        <Private />
      </Content>
    </>
  )
}

export default About

/**
 * スタイル
 */
const TabContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;

  `;

const TabItems = styled.li<{ active: boolean }>`
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#eaeaea' : 'transparent')};

  &:hover {
    background-color: #eaeaea;
  }
  border: 1px solid black;
`;

const Content = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  padding: 2rem;

  border: 1px solid black;
  background-color: white;
`;