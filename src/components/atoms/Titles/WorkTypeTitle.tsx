// スタイル
import styled from 'styled-components';

interface Props {
  title: string;
}

const WorkTypeTitle = ({ title }: Props) => {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
    </>
  );
};


export default WorkTypeTitle

/**
 * スタイル
 */
const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;
const Title = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;