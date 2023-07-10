import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledArticle } from '../templates/Article';
import PageTitle from '../atoms/Titles/PageTitle'
import SkillsList from '../organisms/SkillsList'

const Skills = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにトップにスクロールする
  }, [location]);

  return (
    <StyledArticle>
      <PageTitle title="スキル" />
      <SkillsList />
    </StyledArticle>
  )
}

export default Skills
