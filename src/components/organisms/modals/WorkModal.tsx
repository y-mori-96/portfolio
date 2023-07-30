import React from 'react';
import styled from 'styled-components';
import { WorksData } from '../../../types/WorkData';
import WorkModalSiteTitle from '../../atoms/Titles/WorkModalSiteTitle';
import WorkModalHeader from "../../atoms/Titles/WorkModalHeader";
import CloseButton from '../../atoms/buttons/CloseButton';
import WorkModalOutline from '../../molecules/WorkModalOutline';
import WorkModalHowTo from '../../molecules/WorkModalHowTo';
import WorkModalInfo from '../../molecules/WorkModalInfo';
import WorkModaBackground from '../../molecules/WorkModaBackground';
import WorkModaDesign from '../../molecules/WorkModaDesign';

type ModalProps = {
  modal: number;
  onClose: () => void;
}

const WorkModal: React.FC<ModalProps> = ({ modal, onClose }) => {
  // WorkDataの要素数に合わせる
  const siteData = WorksData[modal];

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
          siteLink = {siteData.siteLink}
        />

        <WorkModalHeader title="利用方法"/>

        <WorkModalHowTo
          howto = {siteData.howto}
        />

        <WorkModalHeader title="概要"/>

        <WorkModalInfo
          release = {siteData.release}
          period = {siteData.period}
          responsible = {siteData.responsible}
          technology = {siteData.technology}
          device = {siteData.device}
        />

        <WorkModalHeader title="背景"/>

        <WorkModaBackground
          problem = {siteData.problem}
          solution = {siteData.solution}
          target = {siteData.target}
          goal = {siteData.goal}
          technologySelection = {siteData.technologySelection}
        />

        <WorkModalHeader title="デザイン"/>

        <WorkModaDesign
          emotion = {siteData.emotion}
          composition = {siteData.composition}
          color = {siteData.color}
          siteColor = {siteData.siteColor}
          font = {siteData.font}
        />

        <div onClick={onClose}>
          <CloseButton/>
        </div>
      </Wrapper>
    </>
  );
};

export default WorkModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000cc;
  cursor: pointer;

  z-index: 9;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  width: 1250px;
  max-width: 100%;
  margin: 0 auto;

  height: 100vh;

  border: 1px solid black;
  background-color: #ffffff;

  overflow-y: scroll;
  z-index: 99;
`;
