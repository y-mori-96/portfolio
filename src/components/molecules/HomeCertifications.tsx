import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
// 画像
import Certification from '../../images/certification.png';

const HomeCertifications: React.FC = () => {
  return (
    <article>
      <Container>
        <Body>
          <HomeTitle title="資格" />
          <Text>体系的な知識習得も欠かせません</Text>
          <SeeMoreButton url="/certifications" />
        </Body>
        <ImgWrapper>
          <Img src={Certification} alt="資格"/>
        </ImgWrapper>
      </Container>
    </article>
  );
};

export default HomeCertifications;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ImgWrapper = styled.div`
  width: 50%;
  height: 400px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Body = styled.div`
  width : 50%;
`;
const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;