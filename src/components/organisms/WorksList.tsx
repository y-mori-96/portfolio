// 型
import { worksData } from '../../types/workData';
// コンポーネント
import WorkCard from './cards/WorkCard';
import { CardsContainer, CardsItem } from './cards/CommonCard';

/**
 * コンポーネント定義
 */
const WorksList: React.FC = () => {

  return (
    <>
      {/* カード */}
      <CardsContainer>
        {worksData
          .map((work, index) => (
            <CardsItem key={index}>
              <WorkCard
                key={work.title}
                imageSrc={work.imageSrc}
                title={work.title}
                data={work.data}
                outline={work.outline}
                skills={work.skills}
              />
            </CardsItem>
          ))}
      </CardsContainer>
    </>
  );
};

export default WorksList;