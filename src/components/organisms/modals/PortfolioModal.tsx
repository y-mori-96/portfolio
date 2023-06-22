import React from 'react';
import styled from 'styled-components';
// データ
import { worksData } from '../../../types/workData';
// コンポーネント
import WorkModalSiteTitle from '../../atoms/Titles/WorkModalSiteTitle';
import WorkModalOutline from '../../molecules/WorkModalOutline';
import WorkModalInfo from '../../molecules/WorkModalInfo';

interface ModalProps {
  onClose: () => void;
}

const PortfolioModal: React.FC<ModalProps> = ({ onClose }) => {
  const siteData = worksData[0];
  return (
    <>
      <ModalContainer onClick={onClose}/>
      <Wrapper>
        <WorkModalSiteTitle
          title = {siteData.title}
        />

        <WorkModalOutline
          genre = {siteData.genre}
          dsescription = {siteData.dsescription}
          siteImage = {siteData.siteImage}
          link = {siteData.siteLink}
        />

        <WorkModalInfo
          release = {siteData.release}
          period = {siteData.period}
          technology = {siteData.technology}
          device = {siteData.device}
        />

        <Button onClick={onClose}>Close</Button>
      </Wrapper>
    </>
  );
};

export default PortfolioModal;

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

  height: auto;

  border: 1px solid black;
  background-color: #ffffff;
`;


const Button = styled.button`
  font-size: 2rem;

  display: block;
  width: 200px;
  height: 50px;
  margin: 0 auto;

`;
