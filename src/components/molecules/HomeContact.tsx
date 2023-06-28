import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';

const HomeContact: React.FC = () => {
  return (
    <>
      <HomeTitle title="お問い合わせ" />
      <Text>詳細ページよりお問い合わせください</Text>
      <SeeMoreButton url="/contact" />
    </>
  );
};

export default HomeContact;

const Text = styled.p`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;