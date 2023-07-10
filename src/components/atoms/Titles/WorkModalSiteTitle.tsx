import styled from 'styled-components';

type Props = {
  title: string;
}

const WorkModalSiteTitle = ({ title }: Props) => {
  return (
    <Title>{title}</Title>
  );
};

export default WorkModalSiteTitle

/**
 * スタイル
 */
const Title = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
`;