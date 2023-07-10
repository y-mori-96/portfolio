import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { StyledArticle } from '../templates/Article';
import PageTitle from '../atoms/Titles/PageTitle'
import Career from '../organisms/Career';
import Private from '../organisms/Private';

const About = () => {
  const [toggle, setToggle] = useState(1);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにトップにスクロールする
  }, [location]);

  function updateToggle(id: number) {
    setToggle(id);
  }

  return (
    <StyledArticle>
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
    </StyledArticle>
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
  padding: 1rem 2rem;
  border-bottom: ${({ active }) => (active ? '3px solid #85A389' : 'none')};

  &:hover {
    background-color: #aec7b2;
    color: #fff;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Section = styled.section<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  padding: 2rem 0;
`;