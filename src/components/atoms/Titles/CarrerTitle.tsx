import React from 'react';
// スタイル
import styled from 'styled-components';

interface CarrerTitle {
  title: string;
}

const Title: React.FC<CarrerTitle> = ({ title }) => {
  return (
    <>
      <StyledTitle>
        {/* {title} */}
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
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
  text-align: center;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;
