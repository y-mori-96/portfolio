import styled from 'styled-components';

interface CarrerTitle {
  title: string;
}

const Title: React.FC<CarrerTitle> = ({ title }) => {
  return (
    <>
      <StyledTitle>
        {title}
      </StyledTitle>
    </>
  )
}

export default Title

/**
 * スタイル
 */
const StyledTitle = styled.h3`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 1rem;
`;
