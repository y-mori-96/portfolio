import React from 'react';
// 型
import { homesData } from '../../types/homeData';
// コンポーネント
import HomeCard from './cards/HomeCard'
import { CardsContainer, CardsItem } from './cards/CommonCard';

/**
 * コンポーネント定義
 */
const HomeList: React.FC = () => {
  return (
    <>
      <CardsContainer>
        {homesData
          .map((home, index) => (
            <CardsItem key={index}>
              <HomeCard
                key={home.title}
                imageSrc={home.imageSrc}
                title={home.title}
                url={home.url}
              />
            </CardsItem>
          ))}
      </CardsContainer>
    </>
  );
};

export default HomeList;