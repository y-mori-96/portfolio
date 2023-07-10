import { StyledArticle } from '../templates/Article';
import PageTitle from '../atoms/Titles/PageTitle'
import SkillsList from '../organisms/SkillsList'

const Skills = () => {
  return (
    <StyledArticle>
      <PageTitle title="スキル" />
      <SkillsList />
    </StyledArticle>
  )
}

export default Skills
