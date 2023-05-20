export const SKILLCATEGORIES = {
  // DESIGN: 'デザイン',
  FRONTEND: 'フロントエンド',
  BACKEND: 'バックエンド',
  TOOL: 'ツール',
} as const;

export type SkillCategoriesValue = typeof SKILLCATEGORIES[keyof typeof SKILLCATEGORIES];
export type SkillCategoriesKey = keyof typeof SKILLCATEGORIES;
