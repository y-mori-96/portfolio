import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Travel from './privates/Travel'
import Boardgame from './privates/Boardgame'
import Programing from './privates/Programing'
import travelImg from '../../images/private-travel.jpg';
import boadgameImg from '../../images/private-boadgame.jpg';
import programingImg from '../../images/private-programing.jpg';
import arrow_left from '../../images/arrow_left.svg';
import arrow_right from '../../images/arrow_right.svg';


const Private = () => {
  const images = [travelImg, boadgameImg, programingImg];
  const imagesAlt = ["海外旅行", "ボードゲーム", "プログラミング"];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentContent((prevContent) => (prevContent + 1) % 3);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    setCurrentContent((prevContent) => (prevContent === 0 ? 2 : prevContent - 1));
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setCurrentContent((prevContent) => (prevContent + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    setCurrentContent(index % images.length);
  };

  return (
    <Wrapper>
      <ContentsWrapper>
        <Contents>
          <CarouselContainer>
            <CarouselImage src={images[currentImage]} alt={imagesAlt[currentImage]} />
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

          <ImgWrapper>
            <Img src={arrow_left} alt="戻る" onClick={goToPreviousImage} />
          </ImgWrapper>

          <Dots>
            {images.map((_, index) => (
              <Dot key={index} active={index === currentImage} onClick={() => goToImage(index)} />
            ))}
          </Dots>

          <ImgWrapper>
            <Img src={arrow_right} alt="次へ" onClick={goToNextImage} />
          </ImgWrapper>

        </Navigation>
      </NavigationWrapper>
    </Wrapper>
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
  background-color: #fff;
  box-shadow: 0 2px 4px #00000080;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const Contents = styled.div`
  width: 100%;
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

const ImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
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
  background-color: ${({ active }) => (active ? '#85A389' : '#aec7b2')};

  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;
