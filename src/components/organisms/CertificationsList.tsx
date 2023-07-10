import certificationsData from '../../types/CertificationData';
import CertificationCard from './cards/CertificationCard'
import { CardsContainer, CardsItem } from './cards/CommonCard';

const CertificationsList = () => {
  return (
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
  );
};

export default CertificationsList;