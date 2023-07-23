import React from "react";
import styled from "styled-components";
import { WorkData } from '../../types/WorkData';
import SiteButton from '../atoms/buttons/SiteButtom';

/**
 * 型定義
 */
type Props = Pick<WorkData, 'genre' | 'dsescription' | 'siteImage' | 'siteLink'>;

/**
 * コンポーネント定義
 */
const WorkModalOutline: React.FC<Props> = ({
    genre
   ,dsescription
   ,siteImage
   ,siteLink
}) => {
  return (
    <Outline>
      <OutlineImgWrapper>
        <OutlineImg src={siteImage} alt={genre} />
      </OutlineImgWrapper>
      <OutlineBody>
        <Genre>{genre}</Genre>
        <SiteDescription>
          {dsescription}
        </SiteDescription>
        <SiteButton url={siteLink} />
      </OutlineBody>
    </Outline>
  );
};

export default WorkModalOutline;

/**
 * スタイル
 */
const Outline = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: auto;
  padding: 2rem;

  background-color: #efffe7;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OutlineImgWrapper = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OutlineImg = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

const OutlineBody = styled.div`
  width: 40%;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Genre = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const SiteDescription = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;
`;