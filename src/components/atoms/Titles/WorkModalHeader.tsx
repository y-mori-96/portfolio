import styled from 'styled-components';

type Props = {
  title: string;
}

const WorkModalHeader = ({ title }: Props) => {
  return (
    <Title>{title}</Title>
  );
};

export default WorkModalHeader

/**
 * スタイル
 */
const Title = styled.h4`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`;