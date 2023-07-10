import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
}

const CarrerTitle: React.FC<Props> = ({ title }) => {
  return (
    <>
      <StyledTitle>
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

export default CarrerTitle;

/**
 * スタイル
 */
const StyledTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px){
    font-size: 1.5rem;
  }
`;
