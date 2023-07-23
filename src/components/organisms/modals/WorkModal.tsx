import React from 'react';
import {ModalContainer, Wrapper} from './StyledModal';
import { WorksData } from '../../../types/WorkData';
import WorkModalSiteTitle from '../../atoms/Titles/WorkModalSiteTitle';
import WorkModalHeader from "../../atoms/Titles/WorkModalHeader";
import CloseButton from '../../atoms/buttons/CloseButton';
import WorkModalOutline from '../../molecules/WorkModalOutline';
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