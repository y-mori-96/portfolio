import React, { useState } from "react";
import styled from 'styled-components';
import { WorksData } from "../../types/WorkData";
import WorkCard from "./cards/WorkCard";
import WorkModal from "./modals/WorkModal";

/**
 * コンポーネント定義
 */
const WorksList: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);;

  const openModal = (work: string) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <>
      {/* カード */}
      <CardsContainer>
        {WorksData.map((work, index) => (
          <CardsItem key={index} onClick={() => openModal(work.modal)}>
            <WorkCard
              key={work.title}
              imageSrc={work.imageSrc}
              title={work.title}
              dsescription={work.dsescription}
              technology={work.technology}
            />
          </CardsItem>
        ))}
      </CardsContainer>

      {/* モーダルを表示する */}
      {selectedWork === "portfolio" && (<WorkModal modal={0} onClose={closeModal} />)}
      {selectedWork === "forestCode" && (<WorkModal modal={1} onClose={closeModal} />)}
      {selectedWork === "applianceOnline" && (<WorkModal modal={2} onClose={closeModal} />)}
      {selectedWork === "backpacktourism" && (<WorkModal modal={3} onClose={closeModal} />)}
    </>
  );
};

export default WorksList;

/**
 * スタイル
 */
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 1200px) and (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardsItem = styled.div`
  max-width: 400px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }
`;
