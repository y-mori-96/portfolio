import React, { useState } from "react";
// 型
import { worksData } from "../../types/workData";
// コンポーネント
import WorkCard from "./cards/WorkCard";
import { CardsContainer, CardsItemHover } from "./cards/CommonCard";
import PortfolioModal from "./modals/PortfolioModal";
import ForestCodeModal from "./modals/ForestCodeModal";

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
        {worksData.map((work, index) => (
          <CardsItemHover key={index} onClick={() => openModal(work.modal)}>
            <WorkCard
              key={work.title}
              imageSrc={work.imageSrc}
              title={work.title}
              dsescription={work.dsescription}
            />
          </CardsItemHover>
        ))}
      </CardsContainer>

      {/* モーダルを表示する */}
      {selectedWork === "portfolio" && (<PortfolioModal onClose={closeModal} />)}
      {selectedWork === "forestCode" && (<ForestCodeModal onClose={closeModal} />)}
    </>
  );
};

export default WorksList;
