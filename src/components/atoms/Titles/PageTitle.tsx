import styled from 'styled-components';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
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
const StyledTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 2rem;
`;
