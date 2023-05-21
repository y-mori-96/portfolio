import React, { useState } from 'react';
import styled from 'styled-components';
// 型
import { skillsData } from '../../types/skillData'
import { SkillCategoriesValue } from '../../types/skillCategories';
import { SKILLCATEGORIES } from '../../types/skillCategories';
import { certificationsData } from '../../types/certificationData';
// コンポーネント
import CertificationCard from './cards/CertificationCard'

/**
 * カテゴリ
 */
// const categories: (SkillCategoriesValue | string)[] = ['すべて', ...Object.values(SKILLCATEGORIES)];

/**
 * コンポーネント定義
 */
const CertificationsList: React.FC = () => {
  // const [checkedCategories, setCheckedCategories] = useState<string[]>(['すべて']);

  // const handleCheckboxChange = (value: string) => {
  //   if (value === 'すべて') {
  //     if (checkedCategories.includes('すべて')) {
  //       setCheckedCategories([]);
  //     } else {
  //       setCheckedCategories(categories);
  //     }
  //   } else {
  //     if (checkedCategories.includes('すべて')) {
  //       setCheckedCategories([value]);
  //     } else {
  //       if (checkedCategories.includes(value)) {
  //         setCheckedCategories(checkedCategories.filter((category) => category !== value));
  //       } else {
  //         setCheckedCategories([...checkedCategories, value]);
  //       }
  //     }
  //   }
  // };

  return (
    <>
      {/* 検索 */}
      {/* <CheckboxContainer>
        {categories.map((category) => (
          <React.Fragment key={category}>
            <CheckboxInputWrapper>
              <CheckboxInput
                type="checkbox"
                checked={checkedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                value={category}
              />
              <CheckboxLabel>{category}</CheckboxLabel>
            </CheckboxInputWrapper>
          </React.Fragment>
        ))}
      </CheckboxContainer> */}

      {/* スキルカード */}
      <CardsContainer>
        {certificationsData
          // .filter((skill) => checkedCategories.includes('すべて') || checkedCategories.includes(skill.categories))
          .map((skill, index) => (
            <CardsItem key={index}>
              <CertificationCard
                key={skill.title}
                imageSrc={skill.imageSrc}
                title={skill.title}
                date={skill.date}
              />
            </CardsItem>
          ))}
      </CardsContainer>
    </>
  );
};

export default CertificationsList;

/**
 * スタイル
 */
/** チェックボックス
 **************************************/
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px; /* CheckboxInputと共通 */
  margin-bottom: 1.5rem;
`;

const CheckboxInputWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  width: 50px;
  height: 50px; /* CheckboxContainerと共通 */
  margin-right: 1rem;
`;

const CheckboxLabel = styled.span`
  font-size: 1.5rem;
  height: 100%;
`;

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
