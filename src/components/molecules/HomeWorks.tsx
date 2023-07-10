import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from '../atoms/animation/ScrollAnimation';
import HomeTitle from '../atoms/Titles/HomeTitle';
import WorkTypeTitle from '../atoms/Titles/WorkTypeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
import WorksList from '../organisms/WorksList'

const HomeWorks: React.FC = () => {
  return (
    <Contents>
      <ScrollAnimation animationType="bottomTop">
        <HomeTitle title="制作物" />
      </ScrollAnimation>
      <Wrapper>
        <ScrollAnimation animationType="bottomTop">
          <WorkTypeTitle title="個人開発"/>
        </ScrollAnimation>
        <ScrollAnimation animationType="bottomTop">
          <WorksList />
        </ScrollAnimation>
      </Wrapper>
      <ScrollAnimation animationType="bottomTop">
        <SeeMoreButton url="/works" />
      </ScrollAnimation>
    </Contents>
  );
};

export default HomeWorks;

const Contents = styled.div`
  margin-bottom: 10rem;
`;
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;