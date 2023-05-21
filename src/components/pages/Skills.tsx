// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import SkillsSearch from '../organisms/SkillsSearch'

/**
 * コンポーネント定義
 */
const Skills = () => {
  return (
    <>
      <PageTitle title="スキル" />
      <SkillsSearch />
    </>
  )
}

export default Skills
