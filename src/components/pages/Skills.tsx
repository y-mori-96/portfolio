// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import SkillsList from '../organisms/SkillsList'

/**
 * コンポーネント定義
 */
const Skills = () => {
  return (
    <>
      <PageTitle title="スキル" />
      <SkillsList />
    </>
  )
}

export default Skills
