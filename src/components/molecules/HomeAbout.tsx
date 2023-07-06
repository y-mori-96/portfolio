import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';

import noImage from '../../images/noImg.png';

const HomeAbout: React.FC = () => {
  return (
    <>
      <HomeTitle title="私について" />
      <Wrapper>
        <ImgWrapper>
          <Img src={noImage} alt="森湧汰" />
        </ImgWrapper>
        <Body>
          <Name><ruby>森湧汰<rp>（</rp><rt>Mori Yuta</rt><rp>）</rp></ruby></Name>

          <Text>
            1996年、兵庫県出身。<br />
            大阪工業大学・工学部・電子情報通信工学科を卒業後、<br/>
            家電業界に入社。<br/>
            3年10ヶ月ほどC言語を用いたソフトウェア開発に従事。<br/>
          </Text>
          <Text>
            現在、<br/>
            プログラミングスクールで、PHP/Laravel/MySQLなどのバックエンドのスキルを学習した後、<br/>
            職業訓練校で、illustrator/Photoshop/XDなどのデザインツール、<br/>
            HTML/CSS/Sass/jQueryなどのフロントエンドのスキルを学習。<br/>
          </Text>
          <Text>
            「一人でECサイトを構築できる」スキルを持つWebエンジニアを目指す。
          </Text>
        </Body>
      </Wrapper>
      <SeeMoreButton url="/about" />
    </>
  );
};

export default HomeAbout;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
`;
const ImgWrapper = styled.div`
  width: 40%;
  padding: 0 2rem;

  border: 1px solid;
`;
const Img = styled.img`
  width: 100%;
  `;
const Body = styled.div`
  width: 60%;

  border: 1px solid;
`;

const Name = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`;