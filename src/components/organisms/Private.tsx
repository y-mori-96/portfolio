import React, { useState, useEffect } from 'react';
// スタイル
import styled from 'styled-components';
// コンポーネント
import Travel from './privates/Travel'
import Boardgame from './privates/Boardgame'
import Programing from './privates/Programing'
// 写真
import picture1 from '../../images/ito.jpg';
import picture2 from '../../images/Nature2.jpg';
import picture3 from '../../images/Nature3.jpg';

const Private = () => {
  const images = [picture1, picture2, picture3];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    // 5秒ごとに画像とコンテンツを更新
    // const interval = setInterval(() => {
    //   setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    //   setCurrentContent((prevContent) => (prevContent + 1) % 3); // 3つのコンテンツがある場合
    // }, 5000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    setCurrentContent((prevContent) => (prevContent === 0 ? 2 : prevContent - 1)); // 3つのコンテンツがある場合
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setCurrentContent((prevContent) => (prevContent + 1) % images.length); // 3つのコンテンツがある場合
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    setCurrentContent(index % images.length); // 3つのコンテンツがある場合
  };

  return (
    <>
      <Wrapper>
        <Content>
          <CarouselContainer>
            <CarouselImage src={images[currentImage]} alt="Carousel Image" />
          </CarouselContainer>
        </Content>
        <Content>
          {currentContent === 0 && <Travel />}
          {currentContent === 1 && <Boardgame />}
          {currentContent === 2 && <Programing />}
        </Content>
      </Wrapper>

      <NavigationWrapper>
        <Navigation>
          <Button onClick={goToPreviousImage}>戻る</Button>

          <Dots>
            {images.map((_, index) => (
              <Dot key={index} active={index === currentImage} onClick={() => goToImage(index)} />
            ))}
          </Dots>

          <Button onClick={goToNextImage}>次へ</Button>
        </Navigation>
      </NavigationWrapper>
    </>
  );
}

export default Private

/**
 * スタイル
 */
const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 1.5rem;
`;

const CarouselContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  /* height: 270px; */
  /* border: 1px solid black;
  background-color: gray; */
  `;

const CarouselImage = styled.img`
  width: 100%;
  height: 270px;
  /* height: 100%; */
  object-fit: contain;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  background-color: #c9c9c9;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #eaeaea;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Dots = styled.div`
  display: flex;
  margin: 0 10px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'gray')};
  margin-right: 5px;
  cursor: pointer;
`;
