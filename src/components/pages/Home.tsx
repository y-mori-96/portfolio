import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledSection } from '../templates/Section';
import HomeAbout from '../molecules/HomeAbout';
import HomeWorks from '../molecules/HomeWorks';
import HomeSkills from '../molecules/HomeSkills';
import HomeCertifications from '../molecules/HomeCertifications';
import HomeContact from '../molecules/HomeContact';
import HomeHero from '../molecules/HomeHero';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにトップにスクロールする
  }, [location]);

  return (
    <article>
      <section>
        <HomeHero />
      </section>
      <StyledSection>
        <HomeAbout />
      </StyledSection>
      <StyledSection>
        <HomeWorks />
      </StyledSection>
      <StyledSection>
        <HomeSkills />
      </StyledSection>
      <StyledSection>
        <HomeCertifications />
      </StyledSection>
      <StyledSection>
        <HomeContact />
      </StyledSection>
    </article>
  )
}

export default Home;