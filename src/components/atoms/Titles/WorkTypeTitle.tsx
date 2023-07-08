import styled from 'styled-components';

type Props = {
  title: string;
}

const WorkTypeTitle = ({ title }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};


export default WorkTypeTitle;

/**
 * スタイル
 */
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  box-shadow: 0 2px 4px #00000019;
  margin-bottom: 2rem;
`;
const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  margin-bottom: 2rem;
`;