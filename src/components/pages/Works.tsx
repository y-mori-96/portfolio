import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledArticle } from '../templates/Article';
import { StyledSection } from '../templates/Section';
import PageTitle from '../atoms/Titles/PageTitle';
import WorkTypeTitle from '../atoms/Titles/WorkTypeTitle';
import WorksList from '../organisms/WorksList';

const Works = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにトップにスクロールする
  }, [location]);

  return (
    <StyledArticle>
      <PageTitle title="制作物" />
      <StyledSection>
        <WorkTypeTitle title="個人開発"/>
        <WorksList />
      </StyledSection>
    </StyledArticle>
  )
}

export default Works;