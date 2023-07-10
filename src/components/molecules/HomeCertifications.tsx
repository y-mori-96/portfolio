import styled from 'styled-components';
import ScrollAnimation from '../atoms/animation/ScrollAnimation';
import HomeTitle from '../atoms/Titles/HomeTitle';
import SeeMoreButton from '../atoms/buttons/SeeMoreButton';
import Certification from '../../images/certification.png';

const HomeCertifications = () => {
  return (
    <Contents>
      <Container>
        <Body>
          <ScrollAnimation animationType="left">
            <HomeTitle title="資格" />
            <ResponsiveImgWrapper>
              <ResponsiveImg src={Certification} alt="資格"/>
            </ResponsiveImgWrapper>
            <Text>体系的な知識習得も欠かしません</Text>
            <SeeMoreButton url="/certifications" />
          </ScrollAnimation>
        </Body>
        <ImgContainer>
          <ScrollAnimation animationType="right">
            <ImgWrapper>
              <Img src={Certification} alt="資格"/>
            </ImgWrapper>
          </ScrollAnimation>
        </ImgContainer>
      </Container>
    </Contents>
  );
};

export default HomeCertifications;


const Contents = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 5rem;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 50%;
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  background-color: #fff;
  object-fit: contain;
  @media (max-width: 600px) {
    display: none;
  }
`;
const ResponsiveImgWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
  }
`;
const ResponsiveImg = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    object-fit: contain;
  }
`;

const Body = styled.div`
  width : 50%;
  @media (max-width: 600px) {
    width : 70%;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;