import styled from 'styled-components';
import HomeHeroImg from '../../images/home_hero.jpg';

const HomeHero = () => {
  return (
    <Contents>
      <Text>
        森の<br/>
        ポートフォリオ
      </Text>
    </Contents>
  );
};

export default HomeHero;

const Contents = styled.div`
  width: 100%;
  /* 画面 - ヘッダー */
  height: calc(100vh - 80px);
  background-image: url(${HomeHeroImg});
  background-size: cover;
  background-position: center;

  position: relative;

  `;

const Text = styled.p`
  font-size: 5rem;
  font-weight: bold;
  color: #fff;

  position: absolute;
  bottom: 10%;
  left: 5rem;

  @media (max-width: 768px) {
    font-size: 4rem;
    left: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
    left: 2rem;
  }
`;