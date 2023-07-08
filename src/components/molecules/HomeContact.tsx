import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
// 画像
import Email from '../../images/email.png';

const HomeContact: React.FC = () => {
  return (
    <article>
      <Container>
        <ImgWrapper>
          <Img src={Email} alt="お問い合わせ"/>
        </ImgWrapper>
        <Body>
          <HomeTitle title="お問い合わせ"/>
          <ResponsiveImgWrapper>
            <ResponsiveImg src={Email} alt="お問い合わせ"/>
          </ResponsiveImgWrapper>
          <Text>
            詳細ページより<br/>
            お問い合わせください
          </Text>
          <SeeMoreButton url="/contact" />
        </Body>
      </Container>
    </article>
  );
};

export default HomeContact;

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const ImgWrapper = styled.div`
  width: 50%;
  height: 400px;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ResponsiveImgWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
  }
`;
const ResponsiveImg = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  width : 50%;
  @media (max-width: 600px) {
    width : 70%;
  }
`;
const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;