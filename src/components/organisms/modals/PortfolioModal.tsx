import React from 'react';
import styled from 'styled-components';
// コンポーネント
import SiteButton from '../../atoms/buttons/SiteButtom'
// 画像
import noImage from '../../../images/noImg.png';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <>
      <ModalContainer onClick={onClose}/>
      <Wrapper>
        <SiteTitle>森のポートフォリオ</SiteTitle>
        <Outline>
          <OutlineImgWrapper>
              <OutlineImg src={noImage} alt="" />
          </OutlineImgWrapper>
          <OutlineBody>
            <Genre>ポートフォリオサイト</Genre>
            <Description>
              自身の経歴や作品などをご紹介するサイト
            </Description>
            {/* <SiteButton url="#" /> */}
          </OutlineBody>
        </Outline>

          <Description>
            <h2>森のポートフォリオ</h2>
            <DescriptionList>
              <DescriptionTerm>コンセプト</DescriptionTerm>
              <DescriptionDetails>学習記録</DescriptionDetails>

              <DescriptionTerm>使用技術</DescriptionTerm>
              <DescriptionDetails>React</DescriptionDetails>
            </DescriptionList>
          </Description>
          <button onClick={onClose}>Close</button>
      </Wrapper>
    </>
  );
};

export default Modal;

/**
 * スタイル
 */
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;

  width: 1250px;
  max-width: 100%;
  margin: 0 auto;

  height: 100vh;

  border: 1px solid black;
  background-color: #ffffff;
`;

const Outline = styled.div`
  display: flex;
  gap: 2rem;
  /* justify-content: center; */

  /* height: 100vh; */
  width: 100%;
  padding: 2rem;

  background-color: #ccc;
`;

const OutlineImgWrapper = styled.div`
  width: 60%;
`;

const OutlineImg = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

const OutlineBody = styled.div`
  width: 40%;
  text-align: left;
`;

const SiteTitle = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
`;
const Genre = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const Description = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;
`;

const DescriptionList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const DescriptionTerm = styled.dt`
  width: 40%; // ddと合計で100％になるように
  font-size: 1.5rem;
`;
const DescriptionDetails = styled.dd`
  width: 60%; // dtと合計で100％になるように
  font-size: 1.5rem;
`;
