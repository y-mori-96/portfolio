import styled from 'styled-components';

type Props = {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <StyledTitle>
      {title}
    </StyledTitle>
  )
}

export default PageTitle;

/**
 * スタイル
 */
const StyledTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
