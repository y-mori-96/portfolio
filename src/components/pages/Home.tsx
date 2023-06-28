// スタイル
import styled from 'styled-components';
// コンポーネント
// import PageTitle from '../atoms/Titles/PageTitle'
// import HomeList from '../organisms/HomeList';
import HomeWorks from '../molecules/HomeWorks';
import HomeSkills from '../molecules/HomeSkills';
import HomeCertifications from '../molecules/HomeCertifications';
import HomeContact from '../molecules/HomeContact';

const Home = () => {
  return (
    <>
      <article>
        <Section>
          <HomeWorks />
        </Section>
        <Section>
          <HomeSkills />
        </Section>
        <Section>
          <HomeCertifications />
        </Section>
        <Section>
          <HomeContact />
        </Section>
      </article>
    </>
  )
}

export default Home;

const Section = styled.section`
  /* height: 100vh; */
  /* background-color: #fff; */
  border: 1px solid #000;
  margin-bottom: 2rem;
`;