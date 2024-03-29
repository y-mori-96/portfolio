import styled from 'styled-components';

type Props = {
  title: string;
}

const WorkDetailTitle = ({ title }: Props) => {
  return (
    <Title>{title}</Title>
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