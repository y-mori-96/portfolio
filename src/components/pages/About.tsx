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

      <Section active={toggle === 1}>
        <Career />
      </Section>

      <Section active={toggle === 2}>
        <Private />
      </Section>
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
  font-size: 1.5rem;
  cursor: pointer;
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#ffffff' : 'transparent')};
  /* border-top: ${({ active }) => (active ? '3px solid black' : 'none')}; */

  &:hover {
    background-color: #eaeaea;
    /* background-color: white; */
  }
  border: 3px solid black;
  &:last-child{
    border-left: none;
    /* border-left: 3px solid black; */
  }
`;

const Section = styled.section<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};

  padding: 2rem;
  border: 3px solid black;
  border-top: none;
  background-color: white;
`;