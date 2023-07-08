import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
// 画像
import homeAbout from '../../images/home-about.jpg';

const HomeAbout: React.FC = () => {
  return (
    <Article>
      <HomeTitle title="私について" />
      <Wrapper>
        <ImgWrapper>
          <Img src={homeAbout} alt="森湧汰" />
        </ImgWrapper>
        <Body>
          <Name>
          <ruby>
            森<rp>（</rp><rt>Mori</rt><rp>）</rp>
          </ruby>
          <span> </span>
          <ruby>
            湧汰<rp>（</rp><rt>Yuta</rt><rp>）</rp>
          </ruby>
          </Name>

          <Text>
            1996年(27歳)、兵庫県出身。<br />
            大阪工業大学・工学部・電子情報通信工学科を卒業後、<br/>
            家電業界に入社。<br/>
            3年10ヶ月ほど、C言語を用いてソフトウェア開発に従事。<br/>
          </Text>
          <Text>
            現在、<br/>
            プログラミングスクールで、<br/>
            HTML/CSS/JavaScriptなどのフロントエンドのスキル、<br/>
            PHP/Laravel/MySQLなどのバックエンドのスキルを学習。<br/>
          </Text>
          <Text>
            職業訓練校で、<br/>
            illustrator/Photoshop/XDなどのデザインツール、<br/>
            HTML/CSS/Sass/jQueryなどのフロントエンドのスキル、<br/>
            WordPressを学習。<br/>
          </Text>
          <Text>
            「一人でECサイトを構築できる」<br/>
            Webエンジニアを目指す。
          </Text>
        </Body>
      </Wrapper>
      <SeeMoreButton url="/about" />
    </Article>
  );
};

export default HomeAbout;

const Article = styled.article`
  margin-bottom: 10rem;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;

  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;
const ImgWrapper = styled.div`
  width: 40%;
  padding: 0 2rem;

  @media (max-width: 768px){
    width: 70%;
    margin-bottom: 2rem;
  }
`;
const Img = styled.img`
  width: 100%;
  `;
const Body = styled.div`
  width: 60%;
`;

const Name = styled.p`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (max-width: 600px){
    font-size: 1rem;
  }
`;