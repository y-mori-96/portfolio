import styled from 'styled-components';
import SkillsSearch from '../organisms/SkillsSearch'

/**
 * コンポーネント定義
 */
const Skills = () => {
  return (
    <>
      <Title>スキル</Title>
      <SkillsSearch />
    </>
  )
}

export default Skills

/**
 * スタイル
 */
const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 2rem;
`;
