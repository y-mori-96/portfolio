import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from '../atoms/animation/ScrollAnimation';
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
import WebsiteIcon from '../../images/website_icon.svg';
import DatabaseIcon from '../../images/database_icon.svg';
import DesignIcon from '../../images/design_icon.svg';
import ToolsIcon from '../../images/tools_icon.svg';

const HomeSkills: React.FC = () => {
  return (
    <Contents>
      <ScrollAnimation animationType="bottomTop">
        <HomeTitle title="スキル" />
      </ScrollAnimation>
      <ScrollAnimation animationType="bottomTop">
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
              TypeScript<br/>
              Three.js
            </Text>
          </Body>
        </Wrapper>
      </ScrollAnimation>

      <ScrollAnimation animationType="bottomTop">
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
      </ScrollAnimation>

      <ScrollAnimation animationType="bottomTop">
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
      </ScrollAnimation>

      <ScrollAnimation animationType="bottomTop">
        <Wrapper>
          <IconWrapper>
            <Icon src={ToolsIcon} alt="開発ツール" />
          </IconWrapper>
          <Body>
            <H4>開発ツール</H4>
            <Text>
              Git / Github<br/>
              Excel / Word / PowerPoint<br/>
              VScode / サクラエディタ<br/>
              Outlook / Slack
            </Text>
          </Body>
        </Wrapper>
      </ScrollAnimation>

      <ScrollAnimation animationType="bottomTop">
        <SeeMoreButton url="/skills" />
      </ScrollAnimation>
    </Contents>
  );
};

export default HomeSkills;

const Contents = styled.div`
  margin-bottom: 10rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  padding: 2rem 0;
  margin-bottom: 2rem;

  border: 1px solid #000;
  background-color: #fff;
  box-shadow: 0 2px 4px #00000080;

  position: relative;

  @media (max-width: 600px) {
    margin-top: calc(50px + 2rem);
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  background-color: #aec7b2;
  border: 1px solid #000;
  color: #000;
  padding: 1.5rem;

  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);

  @media (max-width: 600px) {
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Icon = styled.img`
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  padding-left: calc(50px + 2rem);

  @media (max-width: 600px) {
    padding: 0 1rem;
  }

`;
const H4 = styled.h4`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;
const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;