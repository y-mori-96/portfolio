import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
// 画像
import HomeHeroImg from '../../images/home_hero.jpg';

const HomeHero = () => {
  return (
    <Article>
      <Text>
        森の<br/>
        ポートフォリオサイト
      </Text>
    </Article>
  );
};

export default HomeHero;

const Article = styled.article`
  width: 100%;
  /* 画面 - ヘッダー */
  height: calc(100vh - 80px);
  background-image: url(${HomeHeroImg});
  background-size: cover;
  background-position: center;
  margin-bottom: 5rem;

  position: relative;
`;

const Text = styled.p`
  font-size: 5rem;
  font-weight: bold;
  color: #fff;

  position: absolute;
  bottom: 10%;
  left: 5rem;
`;