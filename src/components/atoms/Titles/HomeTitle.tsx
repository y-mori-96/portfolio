// スタイル
import styled from 'styled-components';

type Props = {
  title: string;
}

const HomeTitle = ({ title }: Props) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};


export default HomeTitle

/**
 * スタイル
 */
const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;