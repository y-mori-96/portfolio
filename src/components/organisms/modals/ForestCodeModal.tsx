import React from 'react';
import { ModalProps } from '../../../types/ModalProps';
import {ModalContainer, Wrapper} from './StyledModal';
import { WorksData } from '../../../types/WorkData';
import WorkModalSiteTitle from '../../atoms/Titles/WorkModalSiteTitle';
import CloseButton from '../../atoms/buttons/CloseButton';
import WorkModalOutline from '../../molecules/WorkModalOutline';
import WorkModalInfo from '../../molecules/WorkModalInfo';

const ForestCodeModal: React.FC<ModalProps> = ({ onClose }) => {
  const siteData = WorksData[1];
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

        <div onClick={onClose}>
          <CloseButton/>
        </div>
      </Wrapper>
    </>
  );
};

export default ForestCodeModal;