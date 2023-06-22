import React from "react";
import styled from "styled-components";
import SiteButton from '../atoms/buttons/SiteButtom';
// 画像


/**
 * 型定義
 */
type Props = {
  genre: string;
  dsescription: string;
  siteImage: string;
  link: string;
};

/**
 * コンポーネント定義
 */
const WorkModalOutline: React.FC<Props> = ({
    genre
   ,dsescription
   ,siteImage
   ,link
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
        <SiteButton url={link} />
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

  background-color: #ccc;

  margin-bottom: 2rem;
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

const Genre = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const SiteDescription = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;
`;