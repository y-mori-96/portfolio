import React from 'react';
import styled from 'styled-components';
import CareersData from '../../types/CareerData';
import CarrerTitle from '../atoms/Titles/CarrerTitle';
import CarrerDateItem from './tabels/CareerDateItem';

const Carrer = () => {
  return (
    <ul>
      {CareersData.map((career, index) => (
        <CarrerItem key={index}>
          <Header>
            <ul>
              <CarrerDateItem
                inDate={career.inDate}
                inState={career.inState}
                outDate={career.outDate}
                outState={career.outState}
                period={career.period}
              />
            </ul>
            <ImgWrap>
              <Img src={career.image} alt={career.imageTitle} />
            </ImgWrap>
          </Header>
          <Body>
            <CarrerTitle title={career.title} />
            <Text>
            {/* career.textの値を改行文字 (\n) で分割し、それぞれの行を表示する */}
              {career.text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
          </Body>
        </CarrerItem>
      ))}
    </ul>
  )
}

export default Carrer

/**
 * スタイル
 */
const CarrerItem = styled.li`
  display: flex;

  width: 100%;
  box-shadow: 0 2px 4px #00000080;
  margin-bottom: 2rem;

  li:last-child {
    margin-bottom: 0;
  }

  background-color: white;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const Header = styled.div`
  width: 25%;
  padding: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Body = styled.div`
  width: 75%;
  padding: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  @media (max-width: 600px){
    font-size: 1rem;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
`
const Img = styled.img`
  width: 100%;
`