import React, { useState } from 'react';
// 型
import { worksData } from '../../types/workData';
// コンポーネント
import WorkCard from './cards/WorkCard';
import { CardsContainer, CardsItemHover } from './cards/CommonCard';
import Modal from './modals/Modal';

/**
 * コンポーネント定義
 */
const WorksList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* カード */}
      <CardsContainer>
        {worksData
          .map((work, index) => (
            <CardsItemHover key={index} onClick={openModal}>
              <WorkCard
                key={work.title}
                imageSrc={work.imageSrc}
                title={work.title}
                data={work.data}
                outline={work.outline}
                skills={work.skills}
              />
            </CardsItemHover>
          ))}
      </CardsContainer>

      {/* モーダルを表示する */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default WorksList;