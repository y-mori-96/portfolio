import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import WorkTypeTitle from '../atoms/Titles/WorkTypeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
import WorksList from '../organisms/WorksList'

const HomeWorks: React.FC = () => {
  return (
    <Article>
      <HomeTitle title="制作物" />
      <Wrapper>
        <WorkTypeTitle title="個人開発"/>
        <WorksList />
      </Wrapper>
      <SeeMoreButton url="/works" />
    </Article>
  );
};

export default HomeWorks;

const Article = styled.article`
  margin-bottom: 10rem;
`;
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;