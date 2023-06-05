// 型
import { certificationsData } from '../../types/certificationData';
// コンポーネント
import CertificationCard from './cards/CertificationCard'
import { CardsContainer, CardsItem } from './cards/CommonCard';

/**
 * コンポーネント定義
 */
const CertificationsList = () => {

  return (
    <>
      <CardsContainer>
        {certificationsData.map((certification, index) => (
          <CardsItem key={index}>
            <CertificationCard
              key={certification.title}
              title={certification.title}
              date={certification.date}
              comment={certification.comment}
            />
          </CardsItem>
        ))}
      </CardsContainer>
    </>
  );
};

export default CertificationsList;