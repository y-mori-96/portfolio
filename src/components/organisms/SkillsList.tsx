import React, { useState } from 'react';
import styled from 'styled-components';
import SkillsData from '../../types/SkillData'
import { SkillCategoriesValue } from '../../types/SkillCategories';
import { SKILLCATEGORIES } from '../../types/SkillCategories';
import SkillCard from './cards/SkillCard'
import { CardsContainer, CardsItem } from './cards/CommonCard';

/**
 * カテゴリ
 */
const categories: (SkillCategoriesValue | string)[] = ['すべて', ...Object.values(SKILLCATEGORIES)];

/**
 * コンポーネント定義
 */
const SkillsList = () => {
  const [checkedCategories, setCheckedCategories] = useState<string[]>(['すべて']);

  const handleCheckboxChange = (value: string) => {
    if (value === 'すべて') {
      if (checkedCategories.includes('すべて')) {
        setCheckedCategories([]);
      } else {
        setCheckedCategories(categories);
      }
    } else {
      if (checkedCategories.includes('すべて')) {
        setCheckedCategories([value]);
      } else {
        if (checkedCategories.includes(value)) {
          setCheckedCategories(checkedCategories.filter((category) => category !== value));
        } else {
          setCheckedCategories([...checkedCategories, value]);
        }
      }
    }
  };

  return (
    <>
      {/* 検索 */}
      <CheckboxContainer>
        {categories.map((category) => (
          <React.Fragment key={category}>
            <CheckboxInputWrapper>
              <CheckboxInput
                type="checkbox"
                checked={checkedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                value={category}
                name='category'
              />
              <CheckboxLabel>{category}</CheckboxLabel>
            </CheckboxInputWrapper>
          </React.Fragment>
        ))}
      </CheckboxContainer>

      {/* スキルカード */}
      <CardsContainer>
        {SkillsData
          .filter((skill) => checkedCategories.includes('すべて') || checkedCategories.includes(skill.categories))
          .map((skill, index) => (
            <CardsItem key={index}>
              <SkillCard
                key={skill.title}
                title={skill.title}
                experience={skill.experience}
                dsescription={skill.dsescription}
              />
            </CardsItem>
          ))}
      </CardsContainer>
    </>
  );
};

export default SkillsList;

/**
 * スタイル
 */
/** チェックボックス
 **************************************/
const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1200px) and (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CheckboxInputWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #ffffff;
  box-shadow: 0 2px 4px #00000080;
  padding: 0.5rem;
`;

const CheckboxInput = styled.input`
  width: 50px;
  height: 50px; /* CheckboxContainerと共通 */
  margin-right: 1rem;

  @media (max-width: 1200px) and (min-width: 601px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

const CheckboxLabel = styled.span`
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;