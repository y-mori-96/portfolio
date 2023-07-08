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
`;
const ImgWrapper = styled.div`
  width: 50%;
  height: 400px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  width : 50%;
`;
const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;