import React from "react";
import styled from "styled-components";
import { WorkData } from '../../types/WorkData';
import { DL, DT, DD } from "./StyledWorkModal";

/**
 * 型定義
 */
type Props = Pick<WorkData, 'emotion' | 'composition' | 'color' | 'siteColor' | 'font'>;
type SiteColorProps = Pick<WorkData, 'siteColor'>;

/**
 * コンポーネント定義
 */
const WorkModaDesign: React.FC<Props> = ({
  emotion,
  composition,
  color,
  siteColor,
  font,
}) => {

  return (
    <DL>
      <DT>情緒</DT>
      <DD>
        {emotion.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>

      <DT>構成</DT>
      <DD>
        {composition.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>

      <DT>カラー</DT>
      <DD>
        {color.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}

        <Wrapper>
          <BaseColor siteColor={siteColor}>{siteColor[0]}</BaseColor>
          <MainColor siteColor={siteColor}>{siteColor[2]}</MainColor>
          <AccentColor siteColor={siteColor}>{siteColor[4]}</AccentColor>
        </Wrapper>
      </DD>

      <DT>フォント</DT>
      <DD>
        {font.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </DD>
    </DL>
  );
};

export default WorkModaDesign;


const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
const BaseColor = styled.p<SiteColorProps>`
  display: inline-block;
  width: 55%;
  height: 100%;
  line-height: 50px;
  font-size: 2vw;
  background-color: ${(props) => props.siteColor[0]};
  color: ${(props) => props.siteColor[1]};
`;
const MainColor = styled.p<SiteColorProps>`
  display: inline-block;
  width: 28%;
  height: 100%;
  line-height: 50px;
  font-size: 2vw;
  background-color: ${(props) => props.siteColor[2]};
  color: ${(props) => props.siteColor[3]};
`;
const AccentColor = styled.p<SiteColorProps>`
  display: inline-block;
  width: 17%;
  height: 100%;
  line-height: 50px;
  font-size: 2vw;
  background-color: ${(props) => props.siteColor[4]};
  color: ${(props) => props.siteColor[5]};
`;