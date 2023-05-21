import styled from 'styled-components';
// 型
import { worksData } from '../../types/workData';
// コンポーネント
import WorkCard from './cards/WorkCard'

/**
 * コンポーネント定義
 */
const WorksList: React.FC = () => {

  return (
    <>
      {/* カード */}
      <CardsContainer>
        {worksData
          .map((skill, index) => (
            <CardsItem key={index}>
              <WorkCard
                key={skill.title}
                imageSrc={skill.imageSrc}
                title={skill.title}
                data={skill.data}
                outline={skill.outline}
                skills={skill.skills}
              />
            </CardsItem>
          ))}
      </CardsContainer>
    </>
  );
};

export default WorksList;

/**
 * スタイル
 */

/** カード
 **************************************/
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin: 0 auto;
`;

const CardsItem = styled.div`
  width: 100%;
`;
