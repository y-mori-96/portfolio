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
import arrow_left from '../../images/arrow_left.png';
import arrow_right from '../../images/arrow_right.png';


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
        <ContentsWrapper>
          <Contents>
            <CarouselContainer>
              <CarouselImage src={images[currentImage]} alt="プライベート画像" />
            </CarouselContainer>
          </Contents>
          <Contents>
            {currentContent === 0 && <Travel />}
            {currentContent === 1 && <Boardgame />}
            {currentContent === 2 && <Programing />}
          </Contents>
        </ContentsWrapper>

        <NavigationWrapper>
          <Navigation>

            <Img src={arrow_left} alt="戻る" onClick={goToPreviousImage} />
            <Dots>
              {images.map((_, index) => (
                <Dot key={index} active={index === currentImage} onClick={() => goToImage(index)} />
              ))}
            </Dots>
            <Img src={arrow_right} alt="次へ" onClick={goToNextImage} />

          </Navigation>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}

export default Private

/**
 * スタイル
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const Contents = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 1.5rem;
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 270px;
  object-fit: contain;
`;

const NavigationWrapper = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  cursor: pointer;
`;

const Dots = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 2rem;

  @media (max-width: 768px) and (min-width: 601px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    width: 40%;
    gap: 0.5rem;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? 'black' : 'gray')};

  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;
