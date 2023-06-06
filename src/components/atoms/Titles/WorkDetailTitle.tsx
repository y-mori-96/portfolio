// スタイル
import styled from 'styled-components';

interface WorkDetailTitleProps {
  title: string;
}

const WorkDetailTitle = ({ title }: WorkDetailTitleProps) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default WorkDetailTitle

/**
 * スタイル
 */
const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;