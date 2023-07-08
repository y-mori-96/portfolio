// スタイル
import styled from 'styled-components';
// コンポーネント
import HomeAbout from '../molecules/HomeAbout';
import HomeWorks from '../molecules/HomeWorks';
import HomeSkills from '../molecules/HomeSkills';
import HomeCertifications from '../molecules/HomeCertifications';
import HomeContact from '../molecules/HomeContact';
import HomeHero from '../molecules/HomeHero';

const Home = () => {
  return (
    <>
      <article>
        <section>
          <HomeHero />
        </section>
        <Section>
          <HomeAbout />
        </Section>
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
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;
`;