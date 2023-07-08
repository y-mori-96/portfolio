import React from 'react';
// スタイル
import styled from 'styled-components';
// 型
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';

import WebsiteIcon from '../../images/website-icon.png';
import DatabaseIcon from '../../images/database-icon.png';
import DesignIcon from '../../images/design-icon.png';
import ToolsIcon from '../../images/tools-icon.png';

const HomeSkills: React.FC = () => {
  return (
    <Article>
      <HomeTitle title="スキル" />
      <Wrapper>
        <IconWrapper>
          <Icon src={WebsiteIcon} alt="フロントエンド" />
        </IconWrapper>
        <Body>
          <H4>フロントエンド</H4>
          <Text>
            HTML<br/>
            CSS / Sass / Styled-components / Tailwind<br/>
            JavaScript / jQuery / React<br/>
            TypeScript
          </Text>
        </Body>
      </Wrapper>

      <Wrapper>
        <IconWrapper>
          <Icon src={DatabaseIcon} alt="バックエンド" />
        </IconWrapper>
        <Body>
          <H4>バックエンド</H4>
          <Text>
            C<br/>
            PHP / Laravel<br/>
            WordPress<br/>
            MySQL
          </Text>
        </Body>
      </Wrapper>

      <Wrapper>
        <IconWrapper>
          <Icon src={DesignIcon} alt="デザインツール" />
        </IconWrapper>
        <Body>
          <H4>デザインツール</H4>
          <Text>
            Illustrator / Photoshop / XD
          </Text>
        </Body>
      </Wrapper>

      <Wrapper>
        <IconWrapper>
          <Icon src={ToolsIcon} alt="開発ツール" />
        </IconWrapper>
        <Body>
          <H4>開発ツール</H4>
          <Text>
            Git / Github<br/>
            Excel / Word / PowerPoint / Outlook<br/>
            VScode / サクラエディタ<br/>
          </Text>
        </Body>
      </Wrapper>

      <SeeMoreButton url="/skills" />
    </Article>
  );
};

export default HomeSkills;

const Article = styled.article`
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  padding: 2rem 0;
  margin-bottom: 2rem;

  border: 1px solid;

  position: relative;
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  background-color: #fffccd;
  padding: 1.5rem;

  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
`;
const Icon = styled.img`
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  padding-left: calc(50px + 2rem);
`;
const H4 = styled.h4`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.3;
`;