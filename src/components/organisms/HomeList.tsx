import React from 'react';
import styled from 'styled-components';
// 型
import { homesData } from '../../types/homeData';
// コンポーネント
import HomeCard from './cards/HomeCard'

/**
 * コンポーネント定義
 */
const HomeList: React.FC = () => {
  return (
    <>
      <CardsContainer>
        {homesData
          .map((skill, index) => (
            <CardsItem key={index}>
              <HomeCard
                key={skill.title}
                imageSrc={skill.imageSrc}
                title={skill.title}
                url={skill.url}
              />
            </CardsItem>
          ))}
      </CardsContainer>
    </>
  );
};

export default HomeList;

/**
 * スタイル
 */

/** カード
 **************************************/
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin: 0 auto;
`;

const CardsItem = styled.div`
  width: 100%;
`;
